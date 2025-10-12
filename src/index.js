const express = require("express");
const app = express();
const port = 3005;

// หน้า index
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Index Page</title>
      <style>
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          font-family: Arial, sans-serif;
          background-color: #f0f0f0;
        }
        h1 {
          font-size: 60px;
          color: #ff3366;
        }
      </style>
    </head>
    <body>
      <h1>I love Aj.Pop forever</h1>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
