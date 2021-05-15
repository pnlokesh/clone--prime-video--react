import React, { useState, useEffect } from 'react';
import { Rating } from '@material-ui/lab';
import { Link } from 'react-router-dom';

import {
  Container,
  RowTitle,
  CardsContainer,
  Card,
  CardPoster,
  CardHover,
  CardTitle,
  CardRating,
} from './MoviesRowStyles';
import SliderComponent from './SliderComponent';
import axiosInstance from '../../requests/axios';

function MoviesRow({ title, fetchUrl }) {
  const imageBaseUrl = 'https://image.tmdb.org/t/p/original/';

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axiosInstance.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  // console.log(movies);

  return (
    <Container>
      <div className="container">
        <RowTitle>
          <h1>{title}</h1>
        </RowTitle>

        <CardsContainer>
          <SliderComponent>
            {movies.map((movie) => (
              <Link to={`/movie/${movie.id}`} key={movie.id}>
                <Card>
                  <CardPoster>
                    <img
                      src={imageBaseUrl + movie?.poster_path}
                      alt={`${movie?.title} poster`}
                    />
                  </CardPoster>
                  <CardHover>
                    <CardTitle>
                      {movie?.title || movie?.original_name}
                    </CardTitle>
                    <CardRating>
                      <Rating
                        name="half-rating-read"
                        defaultValue={0}
                        value={movie?.vote_average / 2}
                        precision={0.2}
                        readOnly
                      />
                    </CardRating>
                  </CardHover>
                </Card>
              </Link>
            ))}
          </SliderComponent>
        </CardsContainer>
      </div>
    </Container>
  );
}

export default MoviesRow;
