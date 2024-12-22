const RestaurantModel = require('../models/restaurant')

const findAllRestaurant = async ()=>{
    const restaurants = await RestaurantModel.find({})
    console.log(restaurants);
}

const addRestaurant = async (name,address)=>{
    const adedRestaurant = await RestaurantModel.create({
        name:name,
        address : address
    })
}
module.exports = {findAllRestaurant,addRestaurant}