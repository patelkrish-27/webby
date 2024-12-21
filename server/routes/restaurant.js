const express = require('express')
const router = express.Router()
const {addRestaurant} = require('../controllers/restaurant')
router.get("/",(req,res)=>{
    res.send("hello world")
})
router.get("/add",(req,res)=>{
    addRestaurant()
    res.send("Data inserted")
})

module.exports = router