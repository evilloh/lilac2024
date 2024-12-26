import Image from 'next/image';
import React from 'react';
import { buildGameData } from '../utils/Lillawards';

type Nominino = {
  gameNames: String[];
  winner: string;
  showWinner: boolean;
};

function Nominino({ gameNames, winner, showWinner }: Nominino) {
  return (
    <div className="gridNominees w-full max-w-6xl mx-auto mt-4">
      {buildGameData(gameNames).map((nominee, index) => {
        const { image, name, styles, shortName } = nominee;
        const isWinner = winner === shortName;

        return (
          <div
            key={`${index} ${nominee.name}`}
            className={`bg-primary-normal w-[180px] pb-2 duration-500  ${
              isWinner && showWinner
                ? ' bg-primary-secondary shadowCustom '
                : ''
            }  ${styles} `}
          >
            <div
              className={`w-[180px] h-[160px] relative ${
                showWinner ? 'saturate-0' : 'saturate-100'
              } ${
                isWinner && showWinner ? 'saturate-100' : ''
              } hover:saturate-100 duration-200`}
            >
              <Image src={image} layout="fill" objectFit="cover"></Image>
            </div>
            <h2
              className={`text-lg text-center pt-4 px-2 pb-1 ${
                isWinner && showWinner ? 'text-primary-black' : ''
              }`}
            >
              {name}
            </h2>
          </div>
        );
      })}
    </div>
  );
}

export default Nominino;
