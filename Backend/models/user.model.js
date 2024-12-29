const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    fullname:{
        firstName:{
            type:String,
            required:true,
            minLength :[3,"Enter a valid name"]
        },
        lastName:{
            type:String,
            required:false,
            minLength :[3,"Enter a valid name"]
        }
    },
    email:{
        type:String,
        required:false,
        unique:true,
        minLength :[3,"Enter a valid email"]
    },
    password:{
        type:String,
        required:false,
        select:false // used to not send password again and again 
    },
    socketId: {
        type:String,
    }
})

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET_TOKEN)
    return token
}
userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password)
}
userSchema.methods.hashPassword = async function(password){
  return  await bcrypt.hash(password,10)
}