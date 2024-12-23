const cloudinary = require('cloudinary').v2
const path = require("path");
cloudinary.config({ 
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME , 
    api_key: process.env.CLOUDINARY_CLOUD_API, 
    api_secret: process.env.CLOUDINARY_CLOUD_SECRET // Click 'View API Keys' above to copy your API secret
});

const uploadFile = async (filePath)=>{
    console.log("helper asked",filePath)
    try{
        const normalizedPath = filePath.replace(/\\/g, "/"); // Replace backslashes with forward slashes
        const result = await cloudinary.uploader.upload(normalizedPath);
        console.log(result)
        return result;
    }catch (error){
        console.log(error.message)
    }
}

module.exports = uploadFile