import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import Button from '../../../components/Button';
import Categories from '../../../components/Categories';
import Nominino from '../../../components/Nominino';
import { categoryNomineeList } from '../../../utils/Lillawards';

export default function Cat() {
  const [categories, setCategories] = useState(false);
  return (
    <Layout>
      {categories && <Categories handler={setCategories} />}
      <section className="min-h-screen min-w-screen flex pt-60 md:pt-90  bg-primary-greyDark flex-col px-8 md:px-16 pb-12">
        <div className="w-full max-w-7xl flex justify-center flex-col mx-auto">
          <div className=" flex justify-between w-full flex-col md:flex-row pt-90">
            <h2 className="mb-4">All games participants</h2>
            <div className="flex mb-4 md:mb-0">
              <Button classImport="mr-12" handler={setCategories}>
                View Categories
              </Button>
            </div>
          </div>
          <p className="mb-4 md:w-1/2">
            Presented first in the lilla redux now aiming for the big prize
            award.
          </p>
        </div>
        <Nominino
          gameNames={categoryNomineeList('all')}
          winner={''}
          showWinner={false}
        />
      </section>
    </Layout>
  );
}
