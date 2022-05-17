const Product = require("../models/product.model")

// TEST
module.exports.test = (req,res) => {
    res.json("HELLO WORLD")
}
// CREATE
module.exports.create =  (req,res) => {
    Product.create(req.body)
        .then(newProduct => res.json(newProduct)) // SUCCESSFUL CREATION 
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        }) // UNSUCCESSFUL CREATION
}
// READ
module.exports.allProducts = (req,res) => {
    Product.find()
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json(err))
}
// READ ONE
module.exports.oneProduct = (req,res) => {
    Product.findOne({_id: req.params.product_id})
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json(err))
}
// UPDATE
module.exports.updateProduct = (req, res) => {
    // FIND ONE AND UPDATE TAKES THREE ARGUMENTS, QUERY, PAYLOAD, BOOLEAN
    Product.findOneAndUpdate({_id: req.params.product_id}, req.body, {new:true, runValidators: true}) // RUN VALIDATOR MUST BE INCLUDED FOR UPDATE
        .then(updatedProduct => res.json(updatedProduct)) // SUCCESSFUL CREATION
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        }) // UNSUCCESSFUL CREATION
}
// DELETE
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.product_id })
        .then(result => res.json({ result }))
        .catch(err => res.json(err));
};