/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import { CardPoster } from './MoviesRow/MoviesRowStyles';

export default class ScrollTest extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: <ArrowForwardIosIcon />,
      prevArrow: <ArrowBackIosIcon />,
    };

    const a = [1, 2, 3, 4, 5, 6, 7, 88, 9, 10];
    return (
      <div className="container">
        <h2>Custom Arrows</h2>
        <Slider {...settings}>
          {a.map((ai, index) => (
            <CardPoster key={index}>
              <img
                src="https://image.tmdb.org/t/p/original/xGuOF1T3WmPsAcQEQJfnG7Ud9f8.jpg"
                alt="poster"
              />
            </CardPoster>
          ))}
        </Slider>
      </div>
    );
  }
}
