import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, CarouselImage } from './HomeCarouselStyles';
import axiosInstance from '../../requests/axios';

function HomeCarousel({ fetchUrl }) {
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

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstance.get(fetchUrl);
      const tenMovies = response.data.results.slice(0, 10);
      setMovies(tenMovies);
    };
    fetchData();
  }, [fetchUrl]);
  // console.log(movies);

  return (
    <Container>
      <div className="container">
        <Slider {...settings}>
          {movies.map((movie) => (
            <CarouselImage>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                alt={
                  movie?.title || movie?.original_name || movie?.original_title
                }
              />
            </CarouselImage>
          ))}
        </Slider>
      </div>
    </Container>
  );
}

export default HomeCarousel;
