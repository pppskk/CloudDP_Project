const express = require("express");

const app = Express();

const port = 3005;

app.get("/", (req, res) => {
  res.send("Hello, World1111122222233!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});