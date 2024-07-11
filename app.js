const express = require("express");
const multer = require("multer");
const path = require("path");
const { openPdf } = require("./pdf");
const { summarizePdf } = require("./openaiService");

const app = express();
app.use(express.json());

// Налаштування сховища multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

// Фільтр файлів для обмеження лише PDF-файлів
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new Error("Only PDF files are allowed"), false);
  }
};

// Налаштування multer з використанням сховища та фільтра файлів
const upload = multer({
  storage,
  fileFilter,
});

// Маршрут для головної сторінки
app.get("/", (req, res) => {
  res.send("Hello world");
});

// Маршрут для завантаження PDF-файлу і отримання узагальнення
app.post("/api/upload", upload.single("file"), async (req, res) => {
  try {
    const pdfPath = req.file.path;
    const pdfText = await openPdf(pdfPath);
    const summary = await summarizePdf(pdfText);
    res.json({ summary });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const port = process.env.PORT || 5500;

// Прослуховування порту
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
