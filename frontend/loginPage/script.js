const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

loginBtn.addEventListener('click', () => {
  loginForm.classList.add('active');
  registerForm.classList.remove('active');
  loginBtn.classList.add('active');
  registerBtn.classList.remove('active');
});

registerBtn.addEventListener('click', () => {
  registerForm.classList.add('active');
  loginForm.classList.remove('active');
  registerBtn.classList.add('active');
  loginBtn.classList.remove('active');
});
// ✅ REGISTER form submit handler
document.querySelector('#registerForm form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = e.target[0].value;
  const email = e.target[1].value;
  const password = e.target[2].value;

  try {
    const res = await fetch('http://localhost:3000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password })
    });

    const data = await res.json();
    if (res.ok) {
      alert('✅ Registered successfully!');
      document.getElementById('loginBtn').click(); // switch to login tab
    } else {
      alert('⚠️ ' + data.message);
    }
  } catch (err) {
    alert('❌ Failed to register');
    console.error(err);
  }
});

// ✅ LOGIN form submit handler
document.querySelector('#loginForm form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = e.target[0].value;
  const password = e.target[1].value;

  try {
    const res = await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    if (res.ok) {
      alert('✅ Login successful!');
      localStorage.setItem('user_id', data.user.id);
      window.location.href = '../TrackerPage/index.html'; // or wherever your tracker page is
    } else {
      alert('⚠️ ' + data.message);
    }
  } catch (err) {
    alert('❌ Failed to login');
    console.error(err);
  }
});
