// BACKEND: restaurantRoutes.js
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads"); // Ensure this folder exists
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage: storage });

const { addRestaurant } = require("../controllers/restaurant");

// Routes
router.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/add", upload.single("file"),async (req, res) => {
  try {
    console.log("File:", req.file);
    console.log("Body:", req.body);

    const { name, address } = req.body;
    const imagePath = path.join('uploads', req.file.filename);      
    // Insert data into the database
    await addRestaurant(name, address, imagePath);

    res.status(200).send("Restaurant data inserted successfully");
  } catch (error) {
    console.error("Error in POST /add:", error);
    res.status(500).send("Failed to upload restaurant data");
  }
});

module.exports = router;