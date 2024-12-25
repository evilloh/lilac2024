import mongoose, { Schema } from "mongoose";

const GameSchema = new Schema({
  gameId: String,
  answers: Object,
  questions: [
    {
      title: String,
      answer: String,
      options: [String],
    },
  ],
});

module.exports = mongoose.models.Game || mongoose.model("Game", GameSchema);
