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
    autoplaySpeed: 2300,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768, // Adjust this value based on your design needs
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-wrapper" style={{ position: 'relative', margin: '0 auto', maxWidth: '1080px', paddingBottom: '100px' }}>  
      <Slider {...settings}>
        {certifications &&
          certifications.map((certification, index) => (
            <a href={certification.link} target="_blank" rel="noopener noreferrer" key={index} style={{ textDecoration: 'none' }}>
              <div style={{ textAlign: 'center', alignItems: 'center' }}>
                <h3 style={{ textAlign: 'center' }}>{certification.title}</h3>
                {certification.image && (
                  <img
                    src={certification.image}
                    alt={certification.title}
                    style={{ maxHeight: '150px', width: 'auto', alignSelf: 'center', margin: '0 auto', borderRadius: '50%' }}
                  />
                )}
                <p style={{ textAlign: 'center' }}>{certification.date}</p>
              </div>
            </a>
          ))}
      </Slider>
    </div>
  );
};

export default CertificationsCarousel;
