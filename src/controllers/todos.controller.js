const axios = require("axios");
const { response } = require("express");

exports.findAll = (request, response) => {
  // Call the json placeholder API to get a list of blog posts
  axios.get("https://jsonplaceholder.typicode.com/todos").then((apicall) => {
    response.send(apicall.data);
  });
};

// exports.findAll = (request, response) => {
//   response.send(
//     "You have reached the controller method for get all blog posts."
//   );
// };

exports.findById = (request, response) => {
  // Call the json placeholder API to get a list of todo
  axios
    .get("https://jsonplaceholder.typicode.com/todos/" + request.params.id)
    .then((apicall) => {
      response.send(apicall.data);
    });
};

exports.create = (request, response) => {
  axios
    .post("https://jsonplaceholder.typicode.com/todos", {
      userId: request.body.userId,
      id: request.body.id,
      title: request.body.title,
      completed: request.body.completed,
    })
    .then((apicall) => {
      response.send(apicall.data);
    });
};

exports.deleteById = (request, response) => {
  axios
    .delete("https://jsonplaceholder.typicode.com/todos/" + request.params.id)
    .then((apicall) => {
      response.send(apicall.data);
    });
};

exports.update = (request, response) => {
  axios
    .put("https://jsonplaceholder.typicode.com/todos/" + request.params.id, {
      title: request.body.title,
    })
    .then((apicall) => {
      response.send(apicall.data);
    });
};
