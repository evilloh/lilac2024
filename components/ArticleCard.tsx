import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  to?: string;
  date?: string;
  description?: string;
  image?: string;
};

export default function ArticleCard({ to, date, description, image }: Props) {
  return (
    <Link href={`/${to}`}>
      <div className="w-[300px] mx-5 cursor-pointer saturate-0 hover:saturate-100 duration-500">
        <div className="w-[300px] h-[200px] relative">
          <Image src={image ? image : '/assets/article.jpg'} layout="fill" />
        </div>
        <p className=" text-primary-greyLight uppercase italic text-sm mt-4 font-prohibition tracking-wide">
          {date}
        </p>
        <p className="text-primary-white uppercase text-lg mt-2 hover:text-primary-greyLight duration-500 font-prohibition tracking-widest">
          {description}
        </p>
      </div>
    </Link>
  );
}
