const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/mesaj", (req, res) => {
  const { name, email, message } = req.body;
  console.log("Gelen veri:", name, email, message);

  // Şimdilik sadece terminale yazıyoruz
  res.status(200).json({ success: true, message: "Mesaj alındı" });
});

app.listen(3001, () => {
  console.log("Sunucu 3001 portunda çalışıyor");
});
