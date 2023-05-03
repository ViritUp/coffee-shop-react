import Hero from "../components/hero/hero";
import AboutUs from "../components/about-us/about-us";
import BestProducts from "../components/best-products/best-products";

const Home = ({data}) => {
  return ( 
    <>
      <Hero />
      <AboutUs />
      <BestProducts data={data} />
    </>
  );
}
 
export default Home;