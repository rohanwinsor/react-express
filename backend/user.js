const mongoose = require("mongoose");
const user = new mongoose.Schema({
  emailid : String,
  username: String,
  password: String,
});

module.exports = mongoose.model("User", user);
