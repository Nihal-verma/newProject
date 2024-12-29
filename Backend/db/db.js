const mongoose = require("mongoose")

const dotenv = require("dotenv");
dotenv.config();
const connectToDb =()=>{ mongoose.connect(process.env.DB_CONNECT).then( ()=>{
  console.log("Database connection")
}).catch((err)=> {
  console.log("err",err);
})}

module.exports = connectToDb
