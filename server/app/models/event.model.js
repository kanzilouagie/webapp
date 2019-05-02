const mongoose = require("mongoose");

const KalenderSchema = new mongoose.Schema(
  {
    title: String,
    date: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Kalender", KalenderSchema);
