const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1/test",{
    useNewUrlParser: true,
	useUnifiedTopology: true,
})
.then(()=> console.log("CONNECTED TO TEST"))
.catch(err => console.log("ERROR: ", err))