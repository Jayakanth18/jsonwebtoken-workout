const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "homepage" });
});

app.listen(8080, () => console.log(`sever is running`));
