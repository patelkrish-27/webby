const express = require('express')
const {connectMongoDb} = require('./connection')
const restaurantRouter = require('./routes/restaurant')
const trialMiddleware = require('./middlewares/index')
const {findAllRestaurant} = require('./controllers/restaurant')
var bodyParser = require('body-parser')

require("dotenv").config(); 

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended:true}))
const cors = require("cors");
app.use(cors({ origin: "*" })); // Allow all origins for testing purposes
app.use(bodyParser.json());

// app.use('/res',restaurantRouter)
connectMongoDb()
app.use(trialMiddleware)
app.use(restaurantRouter)
findAllRestaurant()
app.listen(PORT)