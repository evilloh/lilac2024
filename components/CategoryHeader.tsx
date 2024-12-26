import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { linkslist } from '../utils/Lillawards';
type Props = {
  setCategories: Function;
};

function CategoryHeader({ setCategories }: Props) {
  const router = useRouter();
  const { categoryName } = router.query;
  let category = linkslist.indexOf(
    Array.isArray(categoryName) ? categoryName[0] : categoryName
  );
  let pageExists = true;
  if (category === -1) {
    pageExists = false;
  }
  const first = category === 0 ? true : false;
  const last = category === linkslist.length - 1 ? true : false;
  const prev = first ? linkslist[category] : linkslist[category - 1];
  const next = last ? linkslist[category] : linkslist[category + 1];

  return (
    <div className="pt-20 md:pt-90 h-[160px] bg-primary-normal flex justify-between">
      <h3 className="ml-8 mt-4 hidden md:block">
        category{' '}
        <span className="text-3xl">
          {category}/{linkslist.length - 1}
        </span>
      </h3>
      <div className="flex mx-auto">
        <h3
          className={`ml-8 mt-4 text-lg   ${
            first ? 'opacity-50 cursor-default' : ''
          }`}
        >
          {pageExists && (
            <Link href={prev || ''}>
              <a>
                ←{' '}
                <span className="md:inline-block hidden">
                  Previous category
                </span>
              </a>
            </Link>
          )}
        </h3>
        <h3
          className="ml-8 mt-4 text-lg cursor-pointer"
          onClick={() => {
            console.log('salto');
            return setCategories(true);
          }}
        >
          <span className="mx-2">·</span> View categories
          <span className="mx-2">·</span>
        </h3>
        <h3
          className={`ml-8 mt-4 text-lg cursor-pointer ${
            last ? 'opacity-50 cursor-default' : ''
          }`}
        >
          {pageExists && (
            <Link href={next || ''}>
              <a>
                <span className="md:inline-block hidden">Next category</span> →
              </a>
            </Link>
          )}
        </h3>
      </div>
      <div />
    </div>
  );
}

export default CategoryHeader;
