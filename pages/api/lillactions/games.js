// api/games.js

import dbConnect from '../../../lib/dbConnect';
import Game from '../../../models/Games';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      if (req.query) {
        try {
          const Gamerino = await Game.find({ gameId: req.query.id });
          res.status(200).json({ success: true, data: Gamerino });
        } catch (error) {
          res.status(400).json({ success: false });
        }
      } else {
        try {
          const Games = await Game.find({});
          res.status(200).json({ success: true, data: Games });
        } catch (error) {
          res.status(400).json({ success: false });
        }
      }
      break;
    case 'POST':
      try {
        const game = await Game.create(req.body);
        res.status(201).json({ success: true, data: game });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        const game = await Game.findOneAndUpdate(
          { gameId: req.query.id },
          req.body,
          { new: true }
        );

        res.status(201).json({ success: true, data: game });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
