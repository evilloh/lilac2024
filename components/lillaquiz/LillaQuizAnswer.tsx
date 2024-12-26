import React, { useState } from 'react';

type Props = {
  question: string;
  index: number;
  setAnswer: (e) => void;
  answer: string;
};

const LillaQuizAnswer = ({ question, index, setAnswer, answer }: Props) => {
  const isSame = answer === question;
  return (
    <div
      key={`question ${index}`}
      onClick={(e) => {
        const input = e.target as HTMLElement;
        setAnswer(input.innerText);
      }}
      className={`mx-4 md:mx-auto w-full md:w-[80%] h-[100px] bg-slate-200 flex justify-center items-center cursor-pointer hover:font-bold text-black hover:text-primary-greyLight mb-4 `}
    >
      <p
        className={`${
          isSame ? 'font-bold text-black text-xl' : ''
        }  text-center text-inherit hover:text-primary-greyLight inline-block h-12`}
      >
        {question}
      </p>
    </div>
  );
};

export default LillaQuizAnswer;
