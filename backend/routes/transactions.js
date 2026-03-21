const express = require('express');
const router = express.Router();
const db = require('../db');

// POST /api/transactions
router.post('/', (req, res) => {
  const { user_id, amount, type, date, purpose } = req.body;

  console.log('🟢 POST /api/transactions received:', req.body);

  if (!user_id || !amount || !type || !date || !purpose) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const sql = 'INSERT INTO transactions (user_id, amount, type, date, purpose) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [user_id, amount, type, date, purpose], (err, result) => {
    if (err) {
      console.error('❌ DB Insert Error:', err.sqlMessage || err);
      return res.status(500).json({ message: 'Database error' });
    }

    res.status(201).json({ message: '✅ Transaction saved successfully' });
  });
});


// GET /api/transactions
router.get('/', (req, res) => {
  db.query('SELECT * FROM transactions ORDER BY date DESC', (err, results) => {
    if (err) {
      console.error('❌ DB Fetch Error:', err.sqlMessage || err);
      return res.status(500).json({ message: 'Database error' });
    }

    res.status(200).json(results);
  });
});

module.exports = router;
