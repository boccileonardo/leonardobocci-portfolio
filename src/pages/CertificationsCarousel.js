// CertificationsCarousel.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CertificationsCarousel = ({ certifications }) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
  };

  return (
    <div className="carousel-wrapper" style={{position: 'relative', marginLeft: '10%', marginRight: '10%',  paddingBottom: '100px'}}>
      <Slider {...settings}>
        {certifications.map((certification, index) => (
          <div key={index} style={{ textAlign: 'center', alignItems: 'center'}}>
          <h3 style={{ textAlign: 'center' }}>{certification.title}</h3>
          {certification.image && <img src={certification.image} alt={certification.title} style={{ maxHeight: '150px', width: 'auto', alignSelf: 'center', margin: '0 auto', borderRadius: '50%'}} />}
          <p style={{ textAlign: 'center' }}>{certification.date}</p>
        </div>
        ))}
      </Slider>
    </div>
  );
};

export default CertificationsCarousel;