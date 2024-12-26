import axios from 'axios';
import { GameType } from '../types/Lillaquiz';

export const selectAnswerPost = (
  playerName: string,
  answerValue: string,
  game,
  step: number,
  setGame
) => {
  const updatedGame = { ...game };
  updatedGame.answers[playerName][step] = answerValue;
  axios
    .put(`/api/lillactions/games?id=${game.gameId}`, updatedGame)
    .then(function (response) {
      setGame(response.data?.data);
    })
    .catch(function (error) {
      console.log('error in sending put to api', error);
    });
};

export const initiateGame = (
  game: GameType,
  name: string,
  setGame: (e) => void,
  setStart: (e) => void
) => {
  const superupdated = {
    ...game,
    answers: { ...game.answers, [name]: [] as string[] },
  };
  axios
    .put(`/api/lillactions/games?id=${game.gameId}`, superupdated)
    .then(function (response) {
      setGame(response.data?.data);
    })
    .catch(function (error) {
      console.log('error in sending put to api', error);
    });
  setStart(true);
};

export const calculateWinPercentage = (game: GameType, name: string) => {
  let total = 0,
    wins = 0;
  const correctAnswers = game.questions.map(
    (questionina) => questionina.answer
  );
  const givenAnswers = game.answers[name];

  correctAnswers.forEach((answerina, index) => {
    if (answerina === givenAnswers[index]) {
      total++;
      wins++;
      return;
    }
    return total++;
  });

  const score = (wins / total) * 100;
  return { total, wins, score };
};

export const postGame = (game: GameType) => {
  axios
    .post('/api/lillactions/games', game)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
