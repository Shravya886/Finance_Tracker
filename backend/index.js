

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

// Declare app FIRST
const app = express();
const PORT = 3000;

// Import routes AFTER declaring app
const authRoutes = require('./routes/auth');
const transactionRoutes = require('./routes/transactions');

//  Middleware
app.use(cors());
app.use(bodyParser.json());

//  Serve frontend
app.use(express.static(path.join(__dirname, '../Finance_Tracker')));

//  API routes
app.use('/api/auth', authRoutes);
app.use('/api/transactions', require('./routes/transactions'));

//  Root route
app.get('/', (req, res) => {
  res.send(' Backend is running');
});

//  Start server
app.listen(PORT, () => {
  console.log(` Backend API running at http://localhost:${PORT}`);
});
