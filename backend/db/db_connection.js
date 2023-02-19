const mongoose = require("mongoose");

function DBConnection() {
  mongoose
    .connect("mongodb://localhost:27017/todo-app")
    .then(() => {
      console.log("Connected to Database");
    })
    .catch(() => {
      console.log("Failed to connect to Database");
    });
}

module.exports = DBConnection;