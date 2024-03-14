const mongoose = require("mongoose");

const WordSchema = new mongoose.Schema({
  word: {
    type: String,
    required: true,
  },
  meaning: {
    type: String,
    required: true,
  },
  example: {
    type: String,
    required: true,
  },
});

const WordModel = mongoose.model("Word", WordSchema);

module.exports = { WordModel };
