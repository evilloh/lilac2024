import Layout from '../components/Layout';
import Button from '../components/Button';

const Winners = () => (
  <Layout>
    <section className="min-h-screen flex flex-col md:flex-row  pt-60 md:pt-90 items-center bg-primary-black md:bg-transparent ">
      <div className="w-full md:w-2/3 px-4 md:px-32 2xl:ml-[20%] max-w-2xl">
        <h2 className="text-8xl">2024</h2>
        <h2 className="text-8xl mb-4">WINNERS</h2>
        <h3 className="mb-4">
          THE GAME AWARDS IS PROUD TO RECOGNIZE THE FOLLOWING GAMES AND
          INDIVIDUALS FOR OUTSTANDING CREATIVE AND TECHNICAL ACHIEVEMENT IN
          2024.
        </h3>
        <h3 className="mb-4 font-sans font-light">
          Watch the show here or browse through the categories with the button
          below and find out the winner of each category!
        </h3>
        <Button
          classImport="w-full lg:w-2/5"
          to="/winners/category/allcontestants"
        >
          View Winners
        </Button>
      </div>
      <div className="w-[90%] md:w-3/5 max-w-4xl pt-12 md:pt-0">
        <iframe
          className="lg:w-[700px] md:h-[350px] md:w-[500px] w-full h-[200px]"
          src="https://www.youtube.com/embed/uTtzDnLJvjQ"
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
  </Layout>
);

export default Winners;
