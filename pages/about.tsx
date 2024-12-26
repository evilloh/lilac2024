import Image from 'next/image';
import Layout from '../components/Layout';
import AdvisorCard from '../components/AdvisorCard';

const AboutPage = () => (
  <Layout>
    <section className="min-h-screen flex flex-col md:flex-row  pt-60 md:pt-90 items-center bg-primary-black md:bg-transparent ">
      <div className="w-full lg:w-1/2 max-w-2xl px-8 md:px-32 2xl:ml-[10%]">
        <h2 className="text-9xl mb-4">About</h2>
        <h3 className="text-2xl mb-4">
          The Game Awards recognizes and upholds creative and technical
          excellence in the global video game industry.
        </h3>
        <p className="text-lg">
          We bring together a diverse group of game developers, game players,
          and notable names from popular culture to celebrate and advance
          gaming's position as the most immersive, challenging and inspiring
          form of entertainment. We strive to recognize those who improve the
          wellbeing of the community and elevate voices that represent the
          future of the medium.
        </p>
      </div>
      <div className="w-[90%] md:w-3/5 max-w-4xl  pt-12 md:pt-0">
        <iframe
          className="lg:w-[600px] md:h-[350px] md:w-[300px] w-full h-[200px]"
          src="/assets/video.mp4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
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
    <div className="w-full bg-primary-greyDark">
      <div className="triangle-element ml-auto "></div>
    </div>
    <section className="bg-primary-greyDark w-full min-h-[600px] flex flex-col md:flex-row mx-auto justify-center ">
      <div className=" md:w-1/2 max-w-2xl px-12 py-12 md:py-0">
        <h3 className="text-sm">Host & creator</h3>
        <h2 className="italic mb-2 w-32">Evilloh Sbarbatello</h2>
        <h3 className="font-bold italic mb-4 ">
          The Lilla Awards was founded in 2024 by media entrepreneur Evilloh
          Bakura92, who also hosts and produces the program.
        </h3>
        <p className="">
          Over the past two decades, Evilloh has served as a
          carlo-from-the-journalist, host, and producer of stupid media on the
          internet like the LillaHots series, and the lillainktober.
          <br />
          <br /> Evilloh is best known for his work with Sono un Millenial,
          Evilloh_Ita, Lillavilloh, and YouTube, as well as his landmark series
          of behind the scenes game development stories known as “Lillacorp's
          forgotten game”.
        </p>
      </div>
      <div className="flex justify-around relative md:w-1/2 h-[400px] mx-12">
        <Image src="/assets/evillohpres.jpg" layout="fill" objectFit="cover" />
      </div>
    </section>
    <section className="bg-primary-light w-full min-h-[600px] flex flex-col md:flex-row mx-auto justify-center pt-[100px]">
      <div className="flex justify-around relative md:w-1/2 h-[400px] mx-12">
        <Image src="/assets/alice.jpg" layout="fill" objectFit="cover" />
      </div>
      <div className=" md:w-1/2 max-w-2xl px-12 py-12 md:py-0">
        <h3 className="text-sm">Host</h3>
        <h2 className="italic mb-2 w-32">Alice Pernacchiella</h2>
        <h3 className="font-bold italic mb-4 ">
          To co-host the Lilla Awards 2024 Alice Pernacchiella was chosen from a
          huge selection of characters.
        </h3>
        <p className="">
          Over the past two decades, Alice has served as a prostitute,
          masturbator, and voyeur of places like highway bathrooms and public
          toilets, including churches, parking lots and private houses.
          <br />
          <br /> Alice is best known for his work with GSL Incel, where she
          provides necessary training to future alpha males that will conquer
          their dreams of owning a woman and a lambo.
        </p>
      </div>
    </section>

    <div className="w-full bg-primary-normal">
      <div className="triangle-element-grey ml-auto"></div>
    </div>
    <section className="pb-32 bg-primary-normal px-8 md:px-12 ">
      <div className="max-w-[1400px] mx-auto">
        <div className="md:w-2/3 max-w-2xl mb-12">
          <h2 className="mb-4">Advisory Board</h2>
          <h3 className="mb-4">
            The advisory board helps guide and advance the mission of The Game
            Awards
          </h3>
          <p>
            The Board is not involved in the selection of award nominees or
            winners and learns of the results of voting at the same time as the
            general public. The advisory board includes:
          </p>
        </div>
        <div className="flex flex-wrap">
          <AdvisorCard
            image="/assets/ugino.jpg"
            name="Ugin"
            role="Head of Food Dep."
            empresa="Lillafoods"
            description="I strive for edibility perfection in videogames"
          />
          <AdvisorCard
            image="/assets/bigolo.jpg"
            name="Bigolo"
            role="Head of Stealth Dep."
            empresa="Lillastealth"
            description="He finally played Stray"
          />
        </div>
      </div>
    </section>
  </Layout>
);

export default AboutPage;
