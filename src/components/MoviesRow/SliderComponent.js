import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function SliderComponent({ children }) {
  const settings = {
    lazyLoad: true,
    dots: false,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: <ArrowForwardIosIcon />,
    prevArrow: <ArrowBackIosIcon />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return <Slider {...settings}>{children}</Slider>;
}

export default SliderComponent;
