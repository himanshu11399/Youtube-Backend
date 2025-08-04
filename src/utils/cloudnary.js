import {v2 as cloudnary} from "cloudnary"
import fs from "fs"

cloudnary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

const uploadOnCloud=async(localfilePath)=>{
     try{
        if(!localfilePath) return null
        //upload file to cloudnary
        const response=await cloudnary.uploader.upload(localfilePath,{
            resource_type:auto
        })
        console.log("File uploaded successfully",response.url)
        //delete file from local storage
        return response
     }catch(error){
        fs.unlinkSync(localfilePath) //delete file from local storage
     }
}

export {uploadOnCloud}





