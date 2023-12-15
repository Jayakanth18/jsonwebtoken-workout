const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

app.get("/", (req, res) => {
  const token = jwt.sign({ myName: "jk" }, "uniquekey007");
  res.json({ message: "homepage", token });
});

app.listen(8080, () => console.log(`sever is running`));
