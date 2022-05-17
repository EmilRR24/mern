const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1/authors",{
    useNewUrlParser: true,
	useUnifiedTopology: true,
})
.then(()=> console.log("CONNECTED TO AUTHORS"))
.catch(err => console.log("ERROR: ", err))