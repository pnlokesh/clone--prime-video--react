import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, CarouselImage } from './HomeCarouselStyles';

function HomeCarousel() {
  const settings = {
    lazyLoad: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    adaptiveHeight: true,
    arrows: false,
  };
  return (
    <Container>
      <div className="container">
        <Slider {...settings}>
          <CarouselImage>
            <img
              src="https://image.tmdb.org/t/p/original/xGuOF1T3WmPsAcQEQJfnG7Ud9f8.jpg"
              alt="poster"
            />
          </CarouselImage>

          <CarouselImage>
            <img
              src="https://image.tmdb.org/t/p/original/xGuOF1T3WmPsAcQEQJfnG7Ud9f8.jpg"
              alt="poster"
            />
          </CarouselImage>
        </Slider>
      </div>
    </Container>
  );
}

export default HomeCarousel;
