import Quote from "../components/quotation/quote";
import HeroSection from "../components/Hero/heroSection";
// import Search from "../components/SearchBar/Search";
import Carousel from "../components/offers/carousel";
import FAQSection from "../components/FAQ/Faq";
function App() {
  return (
    <>
      <Quote />
      <HeroSection />
      {/* <Search /> */}
      <Carousel />
      <FAQSection />
    </>
  );
}

export default App;
