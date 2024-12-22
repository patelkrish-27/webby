const express = require('express')
const router = express.Router()
const {addRestaurant} = require('../controllers/restaurant')
router.get("/",(req,res)=>{
    res.send("hello world")
})
router.post("/add",(req,res)=>{
    const {name,address} = req.body
    addRestaurant(name,address)
    res.send("Data inserted")
    console.log("route accessed")
})

module.exports = router