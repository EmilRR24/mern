const playerController = require("../controllers/players.controller")


module.exports = app => {
  // TEST SCREEN
  app.get("/api/players/test", playerController.test);
  // CREATE player
  app.post("/api/players/new", playerController.create);
  // GET ALL player
  app.get("/api/players", playerController.allplayers);
  // GET ONE player
  app.get("/api/players/:player_id", playerController.oneplayer);
  // EDIT player
  app.put("/api/players/:player_id", playerController.updateplayer);
  // DELETE player
  app.delete("/api/players/:player_id", playerController.deleteplayer)
}