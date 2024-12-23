const RestaurantModel = require('../models/restaurant')
const uploadFile =  require('../helpers/upload')

const findAllRestaurant = async ()=>{
    const restaurants = await RestaurantModel.find({})
    console.log(restaurants);
}

const addRestaurant = async (name,address,image)=>{
    const upload = await uploadFile(image)
    const adedRestaurant = await RestaurantModel.create({
        name:name,
        address : address,
        image:upload.secure_url
    })
}
module.exports = {findAllRestaurant,addRestaurant}