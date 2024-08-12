import React, { useEffect, useState } from "react";
import "./ImageSlider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
  };
  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };
  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 7000);
    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <div className="sliderStyles">
      <div
        className="slides"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <div className="leftArrow" onClick={goToPrevious}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <div className="rightArrow" onClick={goToNext}>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
        <div className="dots">
          {images.map((image, index) => (
            <div key={index} onClick={() => goToSlide(index)} className="dot">
              .
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
