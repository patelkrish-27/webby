// BACKEND: restaurantRoutes.js
const express = require("express");
const router = express.Router();
const fileUpload = require('express-fileupload');
const path = require('path');

const { addRestaurant } = require("../controllers/restaurant");

// Routes
router.get("/", (req, res) => {
  res.send("Hello World");
});



router.post("/add",async (req, res) => {


  // try {
  //   // Check if an image is provided
  //   if (!req.files || !req.files.image) {
  //     return res.status(400).send('No image was uploaded.');
  //   }

  //   // Access the uploaded file
  //   const image = req.files.image;

  //   // Validate the file type (optional)
  //   const allowedExtensions = /png|jpg|jpeg|gif/;
  //   const extension = path.extname(image.name).toLowerCase();
  //   if (!allowedExtensions.test(extension)) {
  //     return res.status(400).send('Invalid file type. Please upload an image.');
  //   }

  //   // Set the upload path
  //   const uploadPath = path.join(__dirname, 'uploads', image.name);

  //   // Save the file
  //   await image.mv(uploadPath);

  //   res.send({
  //     status: true,
  //     message: 'Image uploaded successfully!',
  //     path: uploadPath,
  //   });
  // } catch (err) {
  //   res.status(500).send(err.message);
  // }


  try {
    const image = req.files.image;
    console.log("image:",image);
    console.log("Body:", req.body);

    const { name, address } = req.body;
    const imagePath = path.join('uploads',image.name); 
    await image.mv(imagePath);  
    // Insert data into the database
    await addRestaurant(name, address, imagePath);

    res.status(200).send("Restaurant data inserted successfully");
  } catch (error) {
    console.error("Error in POST /add:", error);
    res.status(500).send("Failed to upload restaurant data");
  }
});

module.exports = router;