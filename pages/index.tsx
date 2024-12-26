import Image from 'next/image';
import Layout from '../components/Layout';
import Button from '../components/Button';
import ArticleCard from '../components/ArticleCard';
import Head from 'next/head';

const IndexPage = () => (
  <Layout title="">
    <Head>
      <title>Lillawards 2022</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <section className="h-screen flex pt-60 md:pt-90 items-center justify-center flex-wrap bg-primary-black md:bg-transparent flex-col md:flex-row">
      {/* <div className="w-[90%] md:w-3/5 max-w-4xl">
        <iframe
          className="lg:w-[600px] md:h-[350px] md:w-[500px] w-full h-[200px]"
          src="https://www.youtube.com/embed/h4w-YxhxxkY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div> */}
      <div className="font-bold text-white text-4xl ml-8 mt-12 md:mt-0">
        <div className="flex items-center flex-wrap">
          <div className="text-[90px] md:w-24 md:h-56 lg:w-36 lg:h-[400px] relative w-12 h-32 mr-4">
            <Image src={'/assets/logo.png'} layout="fill"></Image>
          </div>
          <div className="text-6xl md:text-8xl lg:text-9xl">
            THE
            <br /> LILAC
            <br /> 2024
          </div>
        </div>
        <Button animatedButton="animated-button" to="/winners">
          See Results
        </Button>
      </div>
      <video
        autoPlay
        loop
        muted
        id="video"
        className="hidden md:block object-cover"
      >
        <source src={'/assets/video.mp4'} type="video/mp4" />
      </video>
    </section>
    <div className=" bg-primary-black">
      <section className="w-full min-h-[600px] bg-primary-black flex justify-between items-center flex-wrap pb-12 max-w-7xl mx-auto">
        <div className="w-[90%] md:w-3/5 max-w-4xl">
          <iframe
            className="lg:w-[600px] md:h-[350px] md:w-[500px] w-full h-[200px]"
            src="https://www.youtube.com/embed/uTtzDnLJvjQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="text-primary-white w-full md:w-2/5 px-8">
          <h2 className="text-7xl md:text-8xl uppercase font-bold outlined">
            Celebrate the best
          </h2>
          <h2 className="uppercase text-5xl font-bold italic mb-8 tracking-widest">
            video games <br></br> of 2024
          </h2>
          <p>
            And see world premiere announcements of what's coming next in 2024
            and beyond! The Game Awards streams live and free around the world
            on Thursday, December 1, 2024.
          </p>
          <Button
            classImport="w-[250px]"
            animatedButton="animated-button"
            to="/winners"
          >
            See Results
          </Button>
        </div>
        <div></div>
      </section>
    </div>
    <div className="w-full bg-primary-greyDark">
      <div className="triangle-element ml-auto "></div>
    </div>

    <div className="bg-primary-greyDark">
      {/* <section className="bg-primary-greyDark w-full min-h-[600px] max-w-6xl mx-auto">
        <h2 className="text-primary-white uppercase ml-16 text-5xl font-bold italic mb-12">
          News
        </h2>
        <div className="w-full flex justify-around flex-wrap ">
          <ArticleCard
            to="inktober"
            date="November 7, 2022"
            description="Inktober Review"
            image="/assets/inktober/inktober00.jpg"
          ></ArticleCard>
          <ArticleCard
            to="lillachat"
            date="November 15, 2022"
            description="Lillachat w/ Carlo"
            image="/assets/carlotalk.png"
          ></ArticleCard>
          <ArticleCard
            to="lillachoice"
            date="November 20, 2022"
            description="Lillachoices exposed!"
            image="/assets/choices.gif"
          ></ArticleCard>
        </div>
      </section> */}
      <section className="bg-primary-greyDark w-full min-h-[800px] pt-24 md:pt-0 max-w-6xl mx-auto">
        <h2 className="text-primary-white uppercase  text-5xl font-bold mb-12 text-center">
          Explore
        </h2>
        <div className="w-full flex justify-around flex-wrap">
          <div className="w-[500px] h-[300px] relative saturate-0 hover:saturate-100 duration-500 mb-12">
            <a
              href="https://docs.google.com/spreadsheets/d/1m6Mxi7Ovo149Qlh4z8dbFsjpRVA-ZbJU_PyiURglaEI/edit#gid=1958493076"
              target="_blank"
            >
              <Image
                src={'/assets/lillachoice.jpg'}
                layout="fill"
                objectFit="cover"
              ></Image>
            </a>
          </div>
          <div className="w-[500px] h-[300px] relative saturate-0 hover:saturate-100 duration-500 mb-12">
            <a
              href="https://docs.google.com/document/d/14YYKlKifv1CdPFN9RtO2sR4WNGTc8NzYEUcTb7cg3-4/edit#"
              target="_blank"
            >
              <Image
                src={'/assets/lillac.jpg'}
                layout="fill"
                objectFit="cover"
              ></Image>
            </a>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
