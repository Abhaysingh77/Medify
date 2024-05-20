import Style from "./carousel.module.css";
import { useState, useRef } from "react";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselInnerRef = useRef(null);

  const updateCarousel = (index) => {
    const carouselInner = carouselInnerRef.current;
    setCurrentIndex(index);
    carouselInner.scrollLeft = index * carouselInner.clientWidth;
  };
  const handleLeftMove = () => {
    updateCarousel((currentIndex - 1 + 3) % 3);
  };

  const handleRightMove = () => {
    updateCarousel((currentIndex + 1) % 3);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <div className={Style.carousel} ref={carouselInnerRef}>
        <div className={Style.offer1}></div>
        <div className={Style.offer2}></div>
        <div className={Style.offer1}></div>
        <div className={Style.offer2}></div>
        <div className={Style.offer1}></div>
        <div className={Style.offer2}></div>
        <div className={Style.offer2}></div>
        <div className={Style.offer1}></div>
        <div className={Style.offer2}></div>
      </div>
      <div className={Style.navigation}>
        <div onClick={handleLeftMove}></div>
        <div>
          <span className={Style.middle}></span>
        </div>
        <div onClick={handleRightMove}></div>
      </div>
    </div>
  );
}

export default Carousel;
