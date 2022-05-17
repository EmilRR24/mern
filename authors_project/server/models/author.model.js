const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
	name:{
		type:String
	},
}, {timestamps:true})


// "Author" will be pluralised and lowercased to be used as your collection.
// Optional third argument can be another string to explicitly choose collection name.
const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;