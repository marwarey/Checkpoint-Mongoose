const mongoose = require("mongoose");


const user = {
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  favouriteFood: {
    type: Array,
  },
};

module.exports = Person = mongoose.model("user", user);