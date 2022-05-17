// 1. IMPORT YOUR DEPENDENCIES
const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
    title:{
        type:String,
        // VALIDATIONS FOR STRINGS
        required:[true, "REQUIRES A TITLE"],
        minLength:[3, "TITLE MUST BE LARGER THAN 3 CHARACTERS"],
        maxLength:[50, "TITLE MUST BE LESS THAN 50 CHARACTERS"]
    },
    price:{
        type:Number,
        // VALIDATIONS FOR NUMBERS
        required:[true, "REQUIRES A PRICE"],
        min:[1, "MUST BE MORE THAN 0"],
        max:[99999, "MUST BE LESS THAN 99999"]
    },
    description:{
        type:String, 
        required:[true, "REQUIRES A DESCRIPTION"]
    }
}, {timestamps:true})

module.exports = mongoose.model("Product", ProductSchema)