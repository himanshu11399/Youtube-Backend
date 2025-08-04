import dotenv from 'dotenv'
import connectDB from './db/index.js'

dotenv.config({
    path: './.env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT ||8000,()=>{
        console.log(`Server is running on port ${process.env.PORT || 8000}`)
    })
    app.on('error', (err) => {
        console.error('Error in Express app:', err)
        throw err
    })
})

/*
import express from 'express'
const app=express()

(async ()=>{
     try{
        await mongoose.connect('${process.env.DATABASE_URL/${db_name}')
        app.on('error', (err) => {
            console.error('Error in Express app:', err)
            throw err
        })
     }catch{
            console.error('Error connecting to MongoDB:', error)
     }
})()
     */


