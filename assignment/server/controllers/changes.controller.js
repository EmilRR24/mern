const Change = require("../models/change.model")

// TEST
module.exports.test = (req,res) => {
    res.json("HELLO WORLD")
}
// CREATE
module.exports.create =  (req,res) => {
    Change.create(req.body)
        .then(newChange => res.json(newChange)) // SUCCESSFUL CREATION 
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        }) // UNSUCCESSFUL CREATION
}
// READ
module.exports.allChanges = (req,res) => {
    Change.find()
        .then(allChanges => res.json(allChanges))
        .catch(err => res.json(err))
}
// READ ONE
module.exports.oneChange = (req,res) => {
    Change.findOne({_id: req.params.change_id})
        .then(oneChange => res.json(oneChange))
        .catch(err => res.json(err))
}
// UPDATE
module.exports.updateChange = (req, res) => {
    // FIND ONE AND UPDATE TAKES THREE ARGUMENTS, QUERY, PAYLOAD, BOOLEAN
    Change.findOneAndUpdate({_id: req.params.change_id}, req.body, {new:true, runValidators: true}) // RUN VALIDATOR MUST BE INCLUDED FOR UPDATE
        .then(updatedChange => res.json(updatedChange)) // SUCCESSFUL CREATION
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        }) // UNSUCCESSFUL CREATION
}
// DELETE
module.exports.deleteChange = (req, res) => {
    Change.deleteOne({ _id: req.params.change_id })
        .then(result => res.json({ result }))
        .catch(err => res.json(err));
};