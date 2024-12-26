import React, { useState, useEffect } from 'react';
import Layout from '../../../components/Layout';
import Button from '../../../components/Button';
import Image from 'next/image';
import Categories from '../../../components/Categories';
import CategoryHeader from '../../../components/CategoryHeader';
import { useRouter } from 'next/router';
import Nominino from '../../../components/Nominino';
import { categoryNomineeList } from '../../../utils/Lillawards';
import { getGameDetails } from '../../../utils/Lillawards';

export default function Winner() {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState(false);
  const router = useRouter();
  const { categoryName } = router.query;
  const { title, description, winner, videourl } = getGameDetails(
    categoryName as string
  );
  useEffect(() => {
    // I passed setCategories(false) to the Link in Categories but it doesnt get called properly, it sets categories to true!
    // this is a workaround that sets it to false every time the url changes
    setCategories(false);
  }, [categoryName]);
  return (
    <Layout>
      {categories && <Categories handler={setCategories} />}
      <CategoryHeader setCategories={setCategories} />
      <section className="min-h-screen min-w-screen flex pt-60 md:pt-90  bg-primary-greyDark flex-col px-8 md:px-16 pb-12">
        <div className="w-full max-w-7xl flex justify-center flex-col mx-auto">
          <div className=" flex justify-between w-full flex-col md:flex-row">
            <h2 className="mb-4"> {title}</h2>
            <div className="flex mb-4 md:mb-0">
              <Button classImport="mr-12" handler={setOpen} value={open}>
                View Winner
              </Button>
            </div>
          </div>
          <p className="mb-4 md:w-1/2">{description}</p>
        </div>
        <Nominino
          gameNames={categoryNomineeList(categoryName)}
          winner={winner.shorttitle}
          showWinner={open}
        />
        <div
          className={`mt-14 ${
            open ? 'notHiddenino' : 'hiddenino'
          } duration-500 flex flex-col  max-w-7xl mx-auto`}
        >
          <div className="flex flex-wrap md:flex-nowrap ">
            <div className="w-[90%] md:w-1/2 max-w-4xl  pt-12 md:pt-0">
              <iframe
                className="lg:w-[500px] xl:w-[600px] md:h-[350px] md:w-[300px] w-full h-[200px]"
                src={videourl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/2  ml-6 lg:ml-0">
              <h2 className="pb-4">{winner.title}</h2>
              <p>{winner.description}</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
