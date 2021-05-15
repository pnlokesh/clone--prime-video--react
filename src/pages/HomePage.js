import React from 'react';
import styled from 'styled-components/macro';
import { HomeCarousel, MoviesRow } from '../components';
import requests from '../requests/requests';

const HomeContainer = styled.div`
  overflow-x: hidden;
  background-color: #10141d;
  color: #fff;
`;

function HomePage() {
  return (
    <>
      <HomeContainer>
        {/* <ScrollTest /> */}
        <HomeCarousel fetchUrl={requests.fetchTrending} />

        <MoviesRow title="Trending" fetchUrl={requests.fetchTrending} />
        <MoviesRow title="Action" fetchUrl={requests.fetchActionMovies} />
        <MoviesRow title="Comedy" fetchUrl={requests.fetchComedyMovies} />
        <MoviesRow title="Animation" fetchUrl={requests.fetchAnimationMovies} />
        <MoviesRow title="Horror" fetchUrl={requests.fetchHorrorMovies} />
        <MoviesRow title="Documentary" fetchUrl={requests.fetchDocumentaries} />
      </HomeContainer>
    </>
  );
}

export default HomePage;
