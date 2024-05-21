import Navbar from "../../components/navbar/navbar";
import Quote from "../../components/quotation/quote";
import Search from "../../components/SearchBar/Search";
import Frame from "../../components/Frame/Frame";
import FAQSection from "../../components/FAQ/Faq";
import Footer from "../../components/Footer/Footer";
function Doctor() {
  return (
    <div
      style={{
        background:
          "linear-gradient(81deg, #e7f0ff 9.01%, rgba(232, 241, 255, 0.47) 89.11%)",
      }}
    >
      <Quote />
      <Navbar />
      <Frame />
      <Search />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default Doctor;
