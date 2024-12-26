import React, { useState, Dispatch, SetStateAction } from 'react';
import axios from 'axios';
import LillaQuizAnswer from './LillaQuizAnswer';
import {
  selectAnswerPost,
  initiateGame,
  calculateWinPercentage,
} from '../../utils/Lillaquiz';
import { GameType } from '../../types/Lillaquiz';
import LillaQuizEnd from './LillaQuizEnd';

type Props = {
  game: GameType;
  setGame?: Dispatch<SetStateAction<GameType>>;
};

function LillaquizComponent({
  game = { questions: [], gameId: '' },
  setGame,
}: Props) {
  const [name, setName] = useState('');
  const [start, setStart] = useState(false);
  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [total, setTotal] = useState({ total: 0, wins: 0, score: 0 });

  const maxStep = game?.questions?.length | 0;

  const selectAnswer = async () => {
    if (step < maxStep - 1) {
      setStep(step + 1);
      selectAnswerPost(name, answer, game, step, setGame);
      return setAnswer('');
    }
    if (step === maxStep - 1) {
      selectAnswerPost(name, answer, game, step, setGame);
      setAnswer('');
      setTotal(calculateWinPercentage(game, name));
      await axios
        .post(`/api/lillactions/answers?id=${game.gameId}`, {
          gameId: game.gameId,
          name,
          score: calculateWinPercentage(game, name).score,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

      return setGameOver(true);
    }
    return null;
  };

  return (
    <>
      {gameOver ? (
        <LillaQuizEnd game={game} name={name} total={total}></LillaQuizEnd>
      ) : (
        <div className="w-full mx-auto pb-[120px] md:pb-12">
          {!start ? (
            <div className="w-screen h-screen flex flex-col">
              <h3 className="inline-block mb-4 text-center mt-[20%]">
                Type your player name
              </h3>
              <input
                className=" w-[400px] inline-block my-4 py-2 px-4 mx-auto"
                onChange={(e) => setName(e.target.value)}
                value={name}
              ></input>
              <button
                className="bg-white p-2 text-center w-[400px] inline-block my-4 mx-auto"
                onClick={() => initiateGame(game, name, setGame, setStart)}
              >
                Confirm!
              </button>
            </div>
          ) : (
            <div>
              <h2 className="text-center w-full pt-8">Welcome to Lillaquiz!</h2>
              <h3 className=" text-center mt-8">
                {game.questions[step].title}
              </h3>

              <div className="w-full flex max-w-6xl justify-between mx-auto mt-12 flex-wrap">
                {game.questions[step].options.map((question, index) => (
                  <LillaQuizAnswer
                    question={question}
                    index={index}
                    setAnswer={setAnswer}
                    answer={answer}
                    key={`${question + index}`}
                  />
                ))}
              </div>
              <div className="fixed z-50 bottom-0 w-screen bg-primary-light h-[100px] md:relative md:w-[80%] md:mx-auto ">
                <div
                  className={`mx-auto block w-fit text-white text-3xl opacity-70 pt-8 ${
                    answer === ''
                      ? ''
                      : 'opacity-[0.9] hover:opacity-100 hover:text-4xl'
                  } pb-8 md:pb-12`}
                >
                  <button
                    disabled={answer === ''}
                    onClick={(e) => selectAnswer()}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default LillaquizComponent;
