module.exports = (app) => {
  const todos = require("../controllers/todos.controller");
  const router = require("express").Router();

  router.get("/", todos.findAll);
  router.get("/:id", todos.findById);

  router.post("/", todos.create);

  router.put("/:id", todos.update);

  router.delete("/:id", todos.deleteById);

  app.use("/api/todos/", router);
};
