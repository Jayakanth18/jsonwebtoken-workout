const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

//generating token
app.get("/", async (req, res) => {
  const token = await jwt.sign({ date: new Date() }, "uniquekey007", {
    expiresIn: 45,
  });
  res.json({ message: "homepage", token });
});

//verifying token
app.get("/check/:token", async (req, res) => {
  const { token } = req.params;
  try {
    const tokenResult = await jwt.verify(token, "uniquekey007");
    console.log(tokenResult);
    res.json({ message: "success" });
  } catch (error) {
    res.status(401).json({ error });
  }
});

app.listen(8000, () => console.log(`sever is running`));
