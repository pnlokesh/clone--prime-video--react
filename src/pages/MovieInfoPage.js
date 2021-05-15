import React from 'react';
import styled from 'styled-components/macro';
import { Rating } from '@material-ui/lab';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PlayArrowOutlinedIcon from '@material-ui/icons/PlayArrowOutlined';

function MovieInfoPage() {
  return (
    <Container>
      <div className="container">
        <div className="left-container">
          <h1 className="movie-title">Mortal Kombat</h1>
          <div className="info">
            <div className="rating">
              <Rating
                name="half-rating-read"
                defaultValue={7.7 / 2}
                precision={0.5}
                readOnly
              />
            </div>
            <p className="details">IMBD 7.7 &nbsp; 2021 &nbsp; 102min</p>
          </div>

          <p className="overview">
            Washed-up MMA fighter Cole Young, unaware of his heritage, and
            hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out
            and trains with Earth's greatest champions as he prepares to stand
            against the enemies of Outworld in a high stakes battle for the
            universe.
          </p>

          <p className="genre">
            Genres: <span>Comedy, Thriller</span>
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
            src="https://image.tmdb.org/t/p/original/xGuOF1T3WmPsAcQEQJfnG7Ud9f8.jpg"
            alt=""
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
    url('https://image.tmdb.org/t/p/original/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg')
      no-repeat;
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
