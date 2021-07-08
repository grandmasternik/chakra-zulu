const express = require("express");

const PORT = process.env.PORT || 4000;

const app = express();


app.get("/api", (req, res) => {
    res.json({ message: "Welcome to Chakra Zulu Server!" });s
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});