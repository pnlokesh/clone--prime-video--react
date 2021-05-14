import React from 'react';
import { Rating } from '@material-ui/lab';

import {
  Container,
  RowTitle,
  CardsContainer,
  Card,
  CardPoster,
  CardHover,
  CardTitle,
  CardDesc,
  CardRating,
} from './MoviesRowStyles';
import SliderComponent from './SliderComponent';

function MoviesRow() {
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function truncate(str, n) {
    return str?.length > n ? `${str.substr(0, n - 1)}...` : str;
  }

  return (
    <Container>
      <div className="container">
        <RowTitle>
          <h1>Trending</h1>
        </RowTitle>

        <CardsContainer>
          <SliderComponent>
            {a.map((ai, index) => (
              <Card>
                <CardPoster>
                  <img
                    src="https://image.tmdb.org/t/p/original/xGuOF1T3WmPsAcQEQJfnG7Ud9f8.jpg"
                    alt="poster"
                  />
                </CardPoster>
                <CardHover>
                  <CardTitle>Mortal Kombat</CardTitle>
                  {/* <CardDesc>
                    {truncate(
                      "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe.",
                      50
                    )}
                  </CardDesc> */}
                  <CardRating>
                    <Rating
                      name="half-rating-read"
                      defaultValue={7.7 / 2}
                      precision={0.5}
                      readOnly
                    />
                  </CardRating>
                </CardHover>
              </Card>
            ))}
          </SliderComponent>
        </CardsContainer>
      </div>
    </Container>
  );
}

export default MoviesRow;
