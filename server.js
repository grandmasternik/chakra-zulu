require("dotenv").config();
// =============================//
        // Dependencies//
// =============================//
const path = require('path');
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
// =============================//
    // Configure Mongoose //
// =============================//
const mongoose = require("mongoose");
const db = mongoose.connection;
const methodOverride = require('method-override');
const PORT = process.env.PORT || 4000;
// const cors = require("cors");

// =============================//
            //  Seed //
// =============================//
const chakra = require('./chakraSeed.js');
app.get('/chakraSeed', (req, res) => {
  User.deleteMany({}, (error, allUsers) => { })
  User.create(chakraSeed, (error, data) => {
    //res.redirect('/chakras')
    res.send("Seeding Successful! Chakras added to Mongo DB!")
  });
});

// get driver connection
// const dbo = require("./db/conn");

// =============================//
  // Body Parser //
// =============================//
app.use(express.static(path.resolve(__dirname, '../chakra-zu/build')));
// app.use(cors());
app.use(express.json());
// app.use(require("./routes/record"));
app.use(methodOverride(`_method`))

// =============================//
 //  Set Default 'view engine' //
// =============================//
// app.set('view engine', 'ejs');

// ===========================//
          // Routes //
// ============================//
app.get("/api", (req, res) => {
    res.json({ message: "Welcome to Prana Zulu Server!" });
});


app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../prana-zulu/build', 'index.html'));
});

// =============================//
        //  Database //
// =============================// 
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});


// =============================//
// Models //
// =============================//
const ChakraSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  
  located: {
    type: String,
    required: true
  },
  
  color: {
    type: String,
    required: true
  },
  
  element: {
    type: String,
    required: true
  },
  
  purpose: {
    type: String,
    required: true
  },
  
  functions: {
    type: String,
    required: true
  },
  
  focus: {
    type: String,
    required: true
  },
  
  brings: {
    type: String,
    required: true
  },
  
  obstacle: {
    type: String,
    required: true
  }
});

const Chakra = mongoose.model('Chakra', ChakraSchema);

// =============================//
         //Middleware //
// =============================//
db.on('connected', () => console.log('mongo connected'));
db.on('error', (err) => console.log(err.message, ' is mongo connected?'));
db.on('disconnected', () => console.log('mongo disconnected'));

// =============================//
         //Routes //
// =============================//
// Chakra Index Route
app.get("/chakra", async (req, res) => {
  try {
    // send all people
    res.json(await Chakra.find({}));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// PEOPLE CREATE ROUTE
app.post("/chakra", async (req, res) => {
  try {
    // send all people
    res.json(await People.create(req.body));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// =============================//
     // Web Server/Listener //
// =============================//
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});