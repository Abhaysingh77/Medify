import Quote from "../../components/quotation/quote";
import HeroSection from "../../components/Hero/heroSection";
import Carousel from "../../components/offers/carousel";
import FAQSection from "../../components/FAQ/Faq";
import Footer from "../../components/Footer/Footer";
function Homepage() {
  return (
    <>
      <Quote />
      <HeroSection />
      <Carousel />
      <FAQSection />
      <Footer />
    </>
  );
}

export default Homepage;
