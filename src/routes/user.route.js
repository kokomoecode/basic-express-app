module.exports = (app) => {
  const controller = require("../controllers/user.controller");
  const router = require("express").Router(); // GET all users - running router program

  router.get("/", controller.findAll); // GET user by Id

  router.get("/:id", controller.findById);
  app.use("/api/users", router);
};
