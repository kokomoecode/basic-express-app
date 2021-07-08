const axios = require("axios");

exports.findAll = (request, response) => {
  // Call the json placeholder API to get a list of blog posts
  axios.get("https://jsonplaceholder.typicode.com/users").then((apicall) => {
    response.send(apicall.data);
  });
};

// exports.findAll = (request, response) => {
//   response.send(
//     "You have reached the controller method for get all blog posts."
//   );
// };

exports.findById = (request, response) => {
  // Call the json placeholder API to get a list of blog posts
  axios
    .get("https://jsonplaceholder.typicode.com/users/" + request.params.id)
    .then((apicall) => {
      response.send(apicall.data);
    });
};
