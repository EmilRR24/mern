// 1. IMPORT YOUR DEPENDENCIES
const mongoose = require("mongoose")

const ChangeSchema = mongoose.Schema({
    name:{
        type:String,
        // VALIDATIONS FOR STRINGS
        required:[true, "REQUIRES A NAME"],
        minLength:[3, "NAME MUST BE LARGER THAN 3 CHARACTERS"]
    },
}, {timestamps:true})

module.exports = mongoose.model("Change", ChangeSchema)