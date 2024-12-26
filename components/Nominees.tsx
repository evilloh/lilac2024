import Image from 'next/image';
import React from 'react';

type Props = {
  image: string;
  name: string;
  showWinner: boolean;
  isWinner: boolean;
  styles?: string;
};

function Nominees({ image, name, isWinner, showWinner, styles }: Props) {
  return (
    <div
      className={`bg-primary-normal w-[180px] pb-2 duration-500  ${
        isWinner && showWinner ? ' bg-primary-secondary shadowCustom ' : ''
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
}

export default Nominees;
