import mongoose, { Schema } from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    fullname: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    avatar: {
        type: String,  //Cloudnary Service to store image
        required: true,
    },
    coverImage: {
        type: String,
    },
    watchHistory: {
        type: Schema.Types.ObjectId,
        ref: "Video"
    },
    password: {
        type: String,
        required: [true, 'Password is required'],

    },
    refreshToken: {
        type: String,

    }




},
 { timestamps: true }
)

//use hooks from mongoose to hash password before saving
userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();
    this.password=await bcrypt.hash(this.password,10)
    next()
})

//It can check the password is correct or not
userSchema.methods.isPasswordCorrect=async function(password){
    return await bcrypt.coompare(password,this.password)
}

//Generate JWT token
userSchema.methods.generateAccessToken=function(){
    jwt.sign({
        _id: this._id,
        username:this.username,
        email:this.email,
        fullname:this.fullname,
    },
    process.env.ACESS_TOKEN_SECRET,
    {
        expiresIn: process.env.ACESS_TOKEN_EXPIRY
    }
)
}
userSchema.methods.generateRefreshToken=function(){
    jwt.sign({
        _id: this._id,
        username:this.username,
        email:this.email,
        fullname:this.fullname,
    },
    process.env.ACESS_TOKEN_SECRET,
    {
        expiresIn: process.env.ACESS_TOKEN_EXPIRY
    }
)
}

export const User = mongoose.model("User,userSchema")