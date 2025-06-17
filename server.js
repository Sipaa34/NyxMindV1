const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/api/ping", (req, res) => {
  res.json({ msg: "NyxMind aktif 🔥" });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
