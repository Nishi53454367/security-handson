const express = require("express");
const router = express.Router();
router.use(express.json());

router.get("/", (req, res) => {
  // レスポンスに任意のHTTPヘッダを追加
  res.setHeader("X-Timestamp", Date.now());
  let message = req.query.message;
  // リクエストから任意のHTTPヘッダを取得
  const lang = req.headers["x-lang"];

  if (message === "") {
    res.status(400);
    if (lang === "en") {
      message = "message is empty.";
    } else {
      message = "messageが空です。";
    }
  }
  res.send({ message });
});

router.post("/", (req, res) => {
  const body = req.body;
  console.log(body);
  res.end();
});

module.exports = router;