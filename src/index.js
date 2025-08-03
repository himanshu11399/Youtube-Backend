import dotenv from 'dotenv'
import connectDB from './db/index.js'

dotenv.config({
    path: './.env'
})

connectDB()

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


