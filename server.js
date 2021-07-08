require("dotenv").config();
// Dependencies//

const path = require('path');
const express = require("express");
const app = express();

// Configure Mongoose //

const mongoose = require("mongoose");
const db = mongoose.connection;
const methodOverride = require('method-override');
const PORT = process.env.PORT || 4000;
// const cors = require("cors");

//  Seed //

// const dataSeed = require('dataSeed.js');

// get driver connection
// const dbo = require("./db/conn");

// Body Parser Middleware //
app.use(express.static(path.resolve(__dirname, '../chakra-zu/build')));
// app.use(cors());
app.use(express.json());
// app.use(require("./routes/record"));
app.use(methodOverride(`_method`))

//  Set Default 'view engine' //

// app.set('view engine', 'ejs');

// Routes //

app.get("/api", (req, res) => {
    res.json({ message: "Welcome to Prana Zulu Server!" });
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../chakra-zu/build', 'index.html'));
});

//  Database //

//Database 
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

db.on('connected', () => console.log('mongo connected'));
db.on('error', (err) => console.log(err.message, ' is mongo connected?'));
db.on('disconnected', () => console.log('mongo disconnected'));

// Web Server/Listener //

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});