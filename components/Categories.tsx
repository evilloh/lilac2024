import React from 'react';
import Link from 'next/link';
import { linkslist, getGameDetails } from '../utils/Lillawards';

type Props = {
  handler: Function;
};

export default function Categories({ handler }: Props) {
  return (
    <section className="fixed z-[10000] bg-primary-greyLight max-w-screen w-screen h-screen fadeIn pb-8 overflow-y-auto overflow-x-hidden">
      <h3
        className="cursor-pointer right-10 top-5 absolute"
        onClick={() => handler(false)}
      >
        close X
      </h3>
      <h2 className="mx-auto w-1/2 mt-12">2024 NOMINEES</h2>
      <div className="w-full flex flex-wrap mt-12 lg:mx-24">
        {linkslist.map((link, index) => {
          return (
            <div
              key={index + link}
              className="w-[90%] h-[50px] mx-auto md:ml-0 md:w-[220px] md:h-[220px] border-2 border-primary-white flex duration-500 hover:bg-primary-normal md:mr-8 mt-8"
            >
              <Link href={`/winners/category/${link}`}>
                <a className="text-center m-auto uppercase px-2">
                  {getGameDetails(link).title}
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
