const express = require("express");
const api = require("./routes/api");
const app = express();
const port = 3000;

// 静的ファイルを配信
app.use(express.static("public"));

// API
app.use("/api", api);

app.get('/', (req, res, next) => {
  res.end("Top Page");
});

app.listen(port, () => {
  console.log(`Server in running on http://localhost:${port}`);
})