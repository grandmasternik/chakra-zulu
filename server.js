const path = require('path');
const express = require("express");
const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.static(path.resolve(__dirname, '../chakra-zu/build')));

app.get("/api", (req, res) => {
    res.json({ message: "Welcome to Chakra Zulu Server!" });s
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../chakra-zu/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});