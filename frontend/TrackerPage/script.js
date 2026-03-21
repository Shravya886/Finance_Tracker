async function loadTransactions() {
  try {
    const res = await fetch('http://localhost:3000/api/transactions');
    const data = await res.json();

    if (!Array.isArray(data)) throw new Error('Unexpected response');

    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    totalIncome = 0;
    totalExpense = 0;
    balance = 0;

    const table = document.querySelector('#table');
    table.innerHTML = `
      <tr id="header-row">
        <th>Amount</th>
        <th>Transaction Type</th>
        <th>Transaction Date</th>
        <th>Purpose</th>
        <th>Action</th>
      </tr>`;

    data.forEach(t => {
      if (t.user_id !== Number(user_id)) return;

      const txDate = new Date(t.date);
      if (txDate.getMonth() !== currentMonth || txDate.getFullYear() !== currentYear) return;

      // Update totals
      if (t.type === 'income') totalIncome += Number(t.amount);
      else totalExpense += Number(t.amount);

      // Create row
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${t.amount}</td>
        <td>${t.type}</td>
        <td>${t.date}</td>
        <td>${t.purpose}</td>
        <td><button class="btn btn-danger btn-sm delete-btn" data-id="${t.id}">🗑️</button></td>
      `;
      table.appendChild(row);
    });

    balance = totalIncome - totalExpense;
    document.querySelector("#totalIncome").textContent = totalIncome;
    document.querySelector("#expense").textContent = totalExpense;
    document.querySelector("#balance").textContent = balance;

    updatePieChart(totalIncome, totalExpense);

    // Alert if overspending
    if (totalExpense > 20000) {
      alert("⚠️ Alert: You have exceeded ₹20,000 in expenses this month!");
    }

  } catch (err) {
    console.error("❌ Error loading transactions:", err);
  }
}
