const ChangeController = require("../controllers/changes.controller")


module.exports = app => {
    // TEST SCREEN
    app.get("/api/changes/test", ChangeController.test);
    // CREATE CHANGE
    app.post("/api/changes/new", ChangeController.create);
    // GET ALL CHANGE
    app.get("/api/changes", ChangeController.allChanges);
    // GET ONE CHANGE
    app.get("/api/changes/:change_id", ChangeController.oneChange);
    // EDIT CHANGE
    app.put("/api/changes/:change_id", ChangeController.updateChange);
    // DELETE CHANGE
    app.delete("/api/changes/:change_id", ChangeController.deleteChange)
}