const player = require("../models/player.model")

// TEST
module.exports.test = (req,res) => {
  res.json("HELLO WORLD")
}
// CREATE
module.exports.create =  (req,res) => {
  player.create(req.body)
    .then(newplayer => res.json(newplayer)) // SUCCESSFUL CREATION 
    .catch(err => {
      console.log(err)
      res.status(400).json(err)
    }) // UNSUCCESSFUL CREATION
}
// READ
module.exports.allplayers = (req,res) => {
  player.find()
    .then(allplayers => res.json(allplayers))
    .catch(err => res.json(err))
}
// READ ONE
module.exports.oneplayer = (req,res) => {
  player.findOne({_id: req.params.player_id})
    .then(oneplayer => res.json(oneplayer))
    .catch(err => res.json(err))
}
// UPDATE
module.exports.updateplayer = (req, res) => {
  // FIND ONE AND UPDATE TAKES THREE ARGUMENTS, QUERY, PAYLOAD, BOOLEAN
  player.findOneAndUpdate({_id: req.params.player_id}, req.body, {new:true, runValidators: true}) // RUN VALIDATOR MUST BE INCLUDED FOR UPDATE
    .then(updatedplayer => res.json(updatedplayer)) // SUCCESSFUL CREATION
    .catch(err => {
      console.log(err)
      res.status(400).json(err)
    }) // UNSUCCESSFUL CREATION
}
// DELETE
module.exports.deleteplayer = (req, res) => {
  player.deleteOne({ _id: req.params.player_id })
    .then(result => res.json({ result }))
    .catch(err => res.json(err));
};