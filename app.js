const express = require("express");

const app = express();

app.use(express.json());
//express made body content jason

app.get("/", function (request, response) {
  response.send("This is the top route in the Blog Post API");
});

require("./src/routes/blogposts.route")(app);
require("./src/routes/user.route")(app);
require("./src/routes/todos.route")(app);

app.listen(3000, function () {
  console.log("Blog Post API Listening on port 3000");
});
