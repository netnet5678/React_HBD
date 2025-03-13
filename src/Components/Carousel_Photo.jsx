import { useState } from 'react';
import image1 from '../image/1.png';
import image2 from '../image/2.png';
import image3 from '../image/3.png';
import image4 from '../image/4.png';
import image5 from '../image/5.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import './Card.css';

function Carousel_Photo() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedImage, setExpandedImage] = useState(null);

  //imageSrc แทนเป็นอะไรก็ได้
  const handleImageClick = (imageSrc) => {
    setExpandedImage(imageSrc);
    setIsExpanded(true);
  };

  const closeExpandedImage = () => {
    setIsExpanded(false);
    setExpandedImage(null);
  };

  return (
    <div className='container mt-20'>
      {/* Swiper for Carousel */}
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={image1}
            alt=""
            onClick={() => handleImageClick(image1)}
            className="swiper-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image2}
            alt=""
            onClick={() => handleImageClick(image2)}
            className="swiper-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image3}
            alt=""
            onClick={() => handleImageClick(image3)}
            className="swiper-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image4}
            alt=""
            onClick={() => handleImageClick(image4)}
            className="swiper-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image5}
            alt=""
            onClick={() => handleImageClick(image5)}
            className="swiper-image"
          />
        </SwiperSlide>
      </Swiper>

      {/* Modal for expanded image */}
      {isExpanded && (
        <div className="image-modal" onClick={closeExpandedImage}>
          <img src={expandedImage} alt="Expanded" className="expanded-image" />
        </div>
      )}
    </div>
  );
}

export default Carousel_Photo;
