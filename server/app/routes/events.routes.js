module.exports = app => {
  const { checkToken } = require("../middleware");
  const controller = require("../controllers/kalender.controller.js");
  app.post("/api/events", checkToken, controller.create);
  app.get("/api/events", controller.findAll);
  app.get("/api/events/:eventId", controller.findOne);
  app.put("/api/events/:eventId", checkToken, controller.update);
  app.delete("/api/events/:eventId", checkToken, controller.delete);
};
