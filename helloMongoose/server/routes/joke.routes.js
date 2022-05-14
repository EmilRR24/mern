const JokeController = require("../controllers/joke.controller");

module.exports = app => {
  //READ
  app.get(   "/api/jokes/", JokeController.findAllJokes);
  app.get(   "/api/jokes/:id", JokeController.findOneSingleJoke);
  // CREATE
  app.post(  "/api/jokes", JokeController.createNewJoke);
  // EDIT
  app.put(   "/api/jokes/:id", JokeController.updateExistingJoke);
  // DELETE
  app.delete("/api/jokes/:id", JokeController.deleteAnExistingJoke);
};
