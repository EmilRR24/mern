const Author = require("../models/author.model")

// TEST
module.exports.test = (req,res) => {
    res.json("HELLO WORLD")
}
// CREATE
module.exports.create =  (req,res) => {
    Author.create(req.body)
        .then(newAuthor => res.json(newAuthor)) // SUCCESSFUL CREATION 
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        }) // UNSUCCESSFUL CREATION
}
// READ
module.exports.allAuthors = (req,res) => {
    Author.find()
        .then(allAuthors => res.json(allAuthors))
        .catch(err => res.json(err))
}
// READ ONE
module.exports.oneAuthor = (req,res) => {
    Author.findOne({_id: req.params.author_id})
        .then(oneAuthor => res.json(oneAuthor))
        .catch(err => res.json(err))
}
// UPDATE
module.exports.updateAuthor = (req, res) => {
    // FIND ONE AND UPDATE TAKES THREE ARGUMENTS, QUERY, PAYLOAD, BOOLEAN
    Author.findOneAndUpdate({_id: req.params.author_id}, req.body, {new:true, runValidators: true}) // RUN VALIDATOR MUST BE INCLUDED FOR UPDATE
        .then(updatedAuthor => res.json(updatedAuthor)) // SUCCESSFUL CREATION
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        }) // UNSUCCESSFUL CREATION
}
// DELETE
module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.author_id })
        .then(result => res.json({ result }))
        .catch(err => res.json(err));
};