// 1. IMPORT YOUR DEPENDENCIES
const mongoose = require("mongoose")

const AuthorSchema = mongoose.Schema({
    name:{
        type:String,
        // VALIDATIONS FOR STRINGS
        required:[true, "REQUIRES A NAME"],
        minLength:[3, "NAME MUST BE LARGER THAN 3 CHARACTERS"],
        maxLength:[50, "NAME MUST BE LESS THAN 50 CHARACTERS"]
    },
}, {timestamps:true})

module.exports = mongoose.model("Author", AuthorSchema)