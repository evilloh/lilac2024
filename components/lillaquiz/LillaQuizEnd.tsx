import React, { useState, useEffect } from 'react';
import { GameType, GameTotal } from '../../types/Lillaquiz';
import axios from 'axios';

type Props = {
  game: GameType;
  name: string;
  total: GameTotal;
};

const casa = {
  game1: [{ federico: 50 }, { matteo: 40 }],
};

function LillaQuizEnd({ game, name, total }: Props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/lillactions/answers?id=${game.gameId}`)
      .then(function (response) {
        const answers = response.data.data[0].answers;
        answers.sort(function (a, b) {
          return b.score - a.score;
        });

        setData(answers);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  console.log('data', data);
  return (
    <div className="pb-8 md:pb-16">
      <h3 className="text-center pt-4 text-2xl md:text-3xl xl:text-5xl">
        {name} Heres your results for {game.gameId}
      </h3>
      {game.questions.map((question, index) => {
        return (
          <div className="flex flex-wrap" key={question.title + index}>
            <div className="bg-white w-full text-center mt-8 py-2 font-sans font-bold uppercase">
              {question.title}
            </div>{' '}
            <div className="max-w-3xl w-full flex mx-auto mt-4 font-sans">
              <div className="bg-white w-1/2 py-3 px-4">{question.answer}</div>
              <div
                className={`${
                  game.answers[name][index] === question.answer
                    ? 'bg-green-400'
                    : 'bg-red-500'
                } w-1/2 py-3 px-4`}
              >
                {game.answers[name][index]}
              </div>
            </div>
          </div>
        );
      })}
      <h3 className="w-1/2 text-center mx-auto mt-8 font-sans">
        You picked <span className="text-green-500">{total.wins}</span> correct
        answers out of <span className="font-bold">{total.total}</span> scoring
        a total of <span className="font-bold">{Math.floor(total.score)}</span>{' '}
        points for this game.
      </h3>
      <h3 className="font-sans font-bold mt-8 text-center border-y-2 py-1">
        Here's the rankings for this game:
      </h3>
      {data.map((rankino, index) => {
        return (
          <h4
            className={`text-white font-sans uppercase font-semibold inline-block text-center w-full py-2 ${
              index === 0 && 'text-green-500'
            } ${index === 1 && 'text-green-300'} ${
              index === 2 && 'text-green-100'
            }`}
            key={rankino.name + index + rankino.score}
          >
            {rankino.name}:{Math.floor(rankino.score)}
          </h4>
        );
      })}
    </div>
  );
}

export default LillaQuizEnd;
