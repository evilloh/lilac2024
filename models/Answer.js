import mongoose from "mongoose";

const AnswerSchema = new mongoose.Schema({
  gameId: String,
  answers: [Object],
});

module.exports =
  mongoose.models.Answer || mongoose.model("Answer", AnswerSchema);
