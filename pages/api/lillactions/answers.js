import dbConnect from "../../../lib/dbConnect";
import Answer from "../../../models/Answer";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      if (req.query) {
        try {
          const Answerino = await Answer.find({ gameId: req.query.id });
          res.status(200).json({ success: true, data: Answerino });
        } catch (error) {
          res.status(400).json({ success: false });
        }
      } else
        try {
          const answers = await Answer.find({});
          res.status(200).json({ success: true, data: answers });
        } catch (error) {
          res.status(400).json({ success: false });
        }
      break;
    case "POST":
      if (req.query) {
        try {
          const { gameId, name, score } = req.body;
          const answerina = await Answer.findOne({ gameId: req.query.id });
          if (answerina) {
            const existingArray = [...answerina.answers];
            existingArray.push({ name, score });
            const update = {
              answers: existingArray,
            };
            await answerina.updateOne(update);
            return res.status(200).json({ success: true });
          }
          try {
            const answer = await Answer.create({
              gameId: gameId,
              answers: [{ name, score }],
            });
            res.status(200).json({ success: true, data: answer });
          } catch {
            console.log("error creating a new answer");
            res.status(400).json({ success: false });
          }
        } catch (error) {
          console.log("Something went bad with answers!");
          res.status(400).json({ success: false });
        }
      } else
        try {
          const answer = await Answer.create(req.body);
          res.status(201).json({ success: true, data: answer });
        } catch (error) {
          res.status(400).json({ success: false });
        }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
