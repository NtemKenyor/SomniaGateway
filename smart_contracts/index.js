require("dotenv").config();

const express = require('express');

const tokenRoutes = require("../api/tokenRoutes");
// const postRoutes = require("./postRoutes");
// const rampRoutes = require("../api/rampRoutes"); // Add this line

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('API is working!'));
app.get('/test', (req, res) => res.json({ message: 'Test successful' }));
app.post('/data', (req, res) => res.json({ received: req.body }));

app.listen(4000, () => console.log('Server running on port 4000'));