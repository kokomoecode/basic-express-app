module.exports = (app) => {
  const controller = require("../controllers/user.controller");
  const router = require("express").Router(); // GET all users - running router program

  router.get("/", controller.findAll); // GET user by Id

  router.get("/:id", controller.findById);

  router.post("/", controller.create);

  router.put("/:id", controller.update);

  router.delete("/:id", controller.deleteById);

  app.use("/api/users", router);
};
