import Layout from '../components/Layout';
import Button from '../components/Button';
import Flickity from 'react-flickity-component';
const flickityOptions = {
  initialIndex: 0,
};

const Inktober = () => (
  <Layout>
    <section className="min-h-[calc(100vh-100px)] bg-primary-greyDark">
      <h1 className="pt-[150px] text-white font-bold text-3xl text-center pb-2">
        A small throwback to our 2022 inktober
      </h1>
      <h2 className=" text-white font-sans font-light text-lg text-center pb-12">
        Here's a selection of the best of the best of our inktober, the
        cremdelacrém of 2022.
      </h2>
      <Flickity
        className={'carousel '} // default ''
        elementType={'div'} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        <img className="h-[50vh] px-2" src="/assets/inktober/inktober.jpg" />
        <img className="h-[50vh] px-2" src="/assets/inktober/inktober3.jpg" />
        <img className="h-[50vh] px-2" src="/assets/inktober/inktober4.jpg" />
        <img className="h-[50vh] px-2" src="/assets/inktober/inktober5.jpg" />
        <img className="h-[50vh] px-2" src="/assets/inktober/inktober6.jpg" />
        <img className="h-[50vh] px-2" src="/assets/inktober/inktober7.jpg" />
        <img className="h-[50vh] px-2" src="/assets/inktober/inktober8.jpg" />
        <img className="h-[50vh] px-2" src="/assets/inktober/inktober9.jpg" />
        <img className="h-[50vh] px-2" src="/assets/inktober/inktober10.jpg" />
        <img className="h-[50vh] px-2" src="/assets/inktober/inktober11.jpg" />
        <img className="h-[50vh] px-2" src="/assets/inktober/inktober12.jpg" />
        <img className="h-[50vh] px-2" src="/assets/inktober/inktober13.jpg" />
        <img className="h-[50vh] px-2" src="/assets/inktober/inktober14.jpg" />
        <img className="h-[50vh] px-2" src="/assets/inktober/inktober15.jpg" />
        <img className="h-[50vh] px-2" src="/assets/inktober/inktober16.jpg" />
        <img className="h-[50vh] px-2" src="/assets/inktober/inktober17.jpg" />
        <img className="h-[50vh] px-2" src="/assets/inktober/inktober18.jpg" />
        <img className="h-[50vh] px-2" src="/assets/inktober/inktober2.jpg" />
      </Flickity>
    </section>
  </Layout>
);

export default Inktober;
