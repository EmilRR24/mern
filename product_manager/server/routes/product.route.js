const ProductController = require("../controllers/products.controller")


module.exports = app => {
    // TEST SCREEN
    app.get("/api/products/test", ProductController.test);
    // CREATE PRODUCT
    app.post("/api/products/new", ProductController.create);
    // GET ALL PRODUCT
    app.get("/api/products", ProductController.allProducts);
    // GET ONE PRODUCT
    app.get("/api/products/:product_id", ProductController.oneProduct);
    // EDIT PRODUCT
    app.put("/api/products/:product_id", ProductController.updateProduct);
    // DELETE PRODUCT
    app.delete("/api/products/:product_id", ProductController.deleteProduct);
}