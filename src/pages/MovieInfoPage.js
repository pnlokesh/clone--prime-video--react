import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { useParams } from 'react-router-dom';
import { Rating } from '@material-ui/lab';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PlayArrowOutlinedIcon from '@material-ui/icons/PlayArrowOutlined';

import axiosInstance from '../requests/axios';

function MovieInfoPage() {
  const { id } = useParams();
  // console.log(id);
  const APIKEY = process.env.REACT_APP_TMDB_API_KEY;
  const imageBaseUrl = 'https://image.tmdb.org/t/p/original/';
  const fetchMovieById = `/movie/${id}?api_key=${APIKEY}`;

  const [movie, setMovie] = useState({});
  useEffect(() => {
    async function fetchData() {
      const request = await axiosInstance.get(fetchMovieById);
      setMovie(request.data);
    }
    fetchData();
  }, [fetchMovieById]);
  // console.log(movie);

  return (
    <Container bgImage={imageBaseUrl + movie?.backdrop_path}>
      <div className="container">
        <div className="left-container">
          <h1 className="movie-title">
            {movie?.original_title || movie?.title || movie?.original_name}
          </h1>
          <div className="info">
            <div className="rating">
              <Rating
                name="half-rating-read"
                defaultValue={0}
                value={movie?.vote_average / 2}
                precision={0.2}
                readOnly
              />
            </div>
            <p className="details">
              IMBD {movie?.vote_average} &nbsp;{' '}
              {movie.release_date ? movie.release_date.slice(0, 4) : 'unknown'}{' '}
              &nbsp; {movie?.runtime}min
            </p>
          </div>

          <p className="overview">{movie?.overview}</p>

          <p className="genre">
            Genres: &nbsp;
            {movie.genres &&
              Array.from(movie.genres).map((genre) => (
                <span>{genre.name}, &nbsp;</span>
              ))}
          </p>

          <div className="buttons">
            <a className="primary-button" href="#a">
              <PlayArrowIcon fontSize="large" /> Watch Now
            </a>
            <a href="#a">
              <PlayArrowOutlinedIcon /> Watch Trailer
            </a>
            <a href="#a">Add to Watchlist</a>
          </div>
        </div>
        <div className="right-container">
          <img
            src={imageBaseUrl + movie?.poster_path}
            alt={`${movie?.title} poster`}
          />
        </div>
      </div>
    </Container>
  );
}

export default MovieInfoPage;

const Container = styled.div`
  color: #fff;
  /* height: calc(100vh - 80px); */
  width: 100vw;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.75) 0%,
      rgba(0, 0, 0, 0.75) 100%
    ),
    url(${(props) => props.bgImage}) no-repeat;
  background-position: center;
  background-size: cover;

  .container {
    height: 100%;
    padding: 25px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }

  .right-container {
    height: min(50vw, 60vh);
    min-height: 400px;
    @media screen and (min-width: 1440px) {
      height: 60vh;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.75);
    }
  }

  .left-container {
    flex: 1;
    align-self: flex-start;
    padding: 25px 0;
    .movie-title {
      font-size: clamp(1.5rem, 5vw, 2.5rem);
      font-weight: 700;
    }

    .overview {
      font-size: clamp(1rem, 5vw, 1.25rem);
      width: clamp(50vw, 60vw, 1000px);
      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }

    .info {
      padding: 10px 0;
      display: flex;
      align-items: center;
      font-size: clamp(1rem, 5vw, 1.25rem);
      color: rgba(255, 255, 255, 0.75);
    }

    .genre {
      padding: 20px 0 10px 0;
      font-size: clamp(1rem, 5vw, 1.25rem);
      font-weight: 700;
      span {
        font-weight: 400;
      }
    }

    .buttons {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      margin: 20px 0;
      justify-content: center;

      a {
        padding: 20px;
        margin-right: 10px;
        margin-bottom: 10px;
        font-size: clamp(1rem, 5vw, 1.25rem);
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: gray;

        &.primary-button {
          background: rgb(0, 168, 225);
          font-size: clamp(1.25rem, 5vw, 1.5rem);
        }
      }
    }
  }
`;
