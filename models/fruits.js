const mongoose = require("mongoose");
const fruitSchema = new moongoose.Schema(
  {
    name: { type: String, require: true },
    color: { type: String, require: true },
    readyToEat: Boolean,
  },
  {
    timestamps: true,
  }
);

const Fruit = mongoose.model("fruit", fruitSchema);

module.exports = Fruit;
