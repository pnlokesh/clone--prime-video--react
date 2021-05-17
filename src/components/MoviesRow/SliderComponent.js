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
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    adaptiveHeight: true,
    nextArrow: <ArrowForwardIosIcon />,
    prevArrow: <ArrowBackIosIcon />,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
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
