import Head from 'next/head';
import axios from 'axios';
import { useEffect, useState } from 'react';
import LillaquizComponent from '../../components/lillaquiz/LillaquizComponent';
import { GameType } from '../../types/Lillaquiz';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const { slug } = router.query;
  const [data, setData] = useState<GameType | null>(null);

  useEffect(() => {
    if (slug) {
      axios
        .get(`/api/lillactions/games?id=${slug}`)
        .then(function (response) {
          setData(response.data.data[0]);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [slug]);

  return (
    <div className="bg-primary-greyDark w-screen min-h-screen">
      {data ? (
        <LillaquizComponent game={data} setGame={setData} />
      ) : (
        <h2 className="text-center pt-[20vh]">Such empty game.</h2>
      )}
    </div>
  );
}
