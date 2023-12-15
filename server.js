const express = require("express");
const jwt= require("jsonwebtoken");
const app = express();

app.get("/", async(req, res) => {
    const token = await jwt.sign({myName:'jk'},"uniquekey007")
  res.json({ message: "homepage", token });
});

app.listen(8080, () => console.log(`sever is running`));
