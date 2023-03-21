const express = require("express");
const router = express.Router();
router.use(express.json());

router.get("/", (req, res) => {
  let message = req.query.message;

  if (message === "") {
    res.status(400);
    message = "messageが空です。";
  }
  res.send({ message });
});

router.post("/", (req, res) => {
  const body = req.body;
  console.log(body);
  res.end();
});

module.exports = router;