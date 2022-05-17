const AuthorController = require("../controllers/authors.controller")


module.exports = app => {
    // TEST SCREEN
    app.get("/api/authors/test", AuthorController.test);
    // CREATE AUTHOR
    app.post("/api/authors/new", AuthorController.create);
    // GET ALL AUTHOR
    app.get("/api/authors", AuthorController.allAuthors);
    // GET ONE AUTHOR
    app.get("/api/authors/:author_id", AuthorController.oneAuthor);
    // EDIT AUTHOR
    app.put("/api/authors/:author_id", AuthorController.updateAuthor);
    // DELETE AUTHOR
    app.delete("/api/authors/:author_id", AuthorController.deleteAuthor)
}