const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app=express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const books = require('./routes/api/books');

app.use('/api/books', books); //Send any requests to this path to the above javascript.


const port = process.env.PORT || 5000; // First port for Heroku, 5000 for local dev.

app.listen(port, () => console.log(`server started on port ${port}`));