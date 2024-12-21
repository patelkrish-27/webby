const RestaurantModel = require('../models/restaurant')

const findAllRestaurant = async ()=>{
    const restaurants = await RestaurantModel.find({})
    console.log(restaurants);
}

const addRestaurant = async ()=>{
    const adedRestaurant = await RestaurantModel.create({
        name:'hayat',
        address : 'gotri'
    })
}
module.exports = {findAllRestaurant,addRestaurant}