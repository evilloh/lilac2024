import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  name: string;
  empresa: string;
  role: string;
  description: string;
  image: any;
};

export default function AdvisorCard({
  name,
  empresa,
  role,
  description,
  image,
}: Props) {
  return (
    <div className="mx-auto md:mx-5 saturate-0 hover:saturate-100 duration-500 flex md:w-2/5 mb-14">
      <div className="w-[200px] h-[200px] relative">
        <Image src={image} layout="fill" objectFit="cover" />
      </div>
      <div className="w-[200px] ml-4 flex flex-col">
        <h3 className="font-semibold uppercase italic text-sm mb-2">
          {empresa}
        </h3>
        <h3 className="text-3xl font-bold">{name}</h3>
        <h3 className="text-sm mt-2 hover:text-primary-greyLight duration-500">
          {role}
        </h3>
        <p className="mt-auto italic">{description}</p>
      </div>
    </div>
  );
}
