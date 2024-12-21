const express = require('express')
const {connectMongoDb} = require('./connection')
const multer = require('multer')
const RestaurantModel = require('./models/restaurant')
const restaurantRouter = require('./routes/restaurant')
const trialMiddleware = require('./middlewares/index')
const {findAllRestaurant} = require('./controllers/restaurant')
require("dotenv").config(); 

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended:true}))

// app.use('/res',restaurantRouter)
connectMongoDb()
app.use(trialMiddleware)
app.use(restaurantRouter)
findAllRestaurant()
app.listen(PORT)