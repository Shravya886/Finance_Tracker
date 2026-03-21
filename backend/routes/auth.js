const express = require('express');
const db = require('../db');
const router = express.Router();

// Register route
router.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  db.query(
    'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
    [username, email, password],
    (err, result) => {
      if (err) {
        console.error('Registration error:', err); // Log the actual error
        return res.status(400).json({ message: 'Registration failed', error: err.sqlMessage || err.message });
      }
      res.json({ message: 'Registered successfully' });
    }
  );
});

// Login route
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  db.query(
    'SELECT * FROM users WHERE email = ? AND password = ?',
    [email, password],
    (err, results) => {
      if (err || results.length === 0) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
      res.json({ message: 'Login successful', user: results[0] });
    }
  );
});

module.exports = router;