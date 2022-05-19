const mongoose = require("mongoose")

const playerSchema = mongoose.Schema({
  name:{
    type:String
  },
  position:{
    type:Number
  },
  status:{
    type:String
  }
}, {timestamps:true})

module.exports.Product = mongoose.model("player", playerSchema)