import Layout from '../components/Layout';
import Button from '../components/Button';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Lillachat = () => (
  <Layout>
    <section className="min-h-[calc(100vh-100px)] bg-primary-greyDark">
      <div className="mx-auto max-w-3xl">
        <h1 className="pt-[150px] text-white font-bold text-3xl pb-2">
          Lillachat was a terrible name made in an exciting moment
        </h1>
        <p className=" text-white font-sans font-light text-base mb-2">
          Today we present a brand new episode of what could be a new series of
          chats or maybe just a standalone episode! Today our hosts Matteo and
          Evilloh are having a talk with an expert in TCG and card games in
          general, known globally for its achievemnts in Lists.txt and guinnes
          world record for biggest circumference in scrotum:
          OmbradeldragocelesteCarlo!
        </p>
        <p className=" text-white font-sans font-light text-base mb-12">
          We're happy to talk with him about some of his insight in the studies
          about the Card games, some of his thoughts about Lilac and a
          surprisingly official announcement regarding MTG! Everything will be
          discussed in today's podcast here below!
        </p>
        <div>
          <AudioPlayer
            src="/assets/charlestalk.mp3"
            onPlay={(e) => console.log('onPlay')}
            // other props here
          />
        </div>
      </div>
    </section>
  </Layout>
);

export default Lillachat;
