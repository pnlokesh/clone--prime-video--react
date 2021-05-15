import React from 'react';
import styled from 'styled-components/macro';
import { HomeCarousel, MoviesRow } from '../components';

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
        <HomeCarousel />

        <MoviesRow />
        <MoviesRow />
      </HomeContainer>
    </>
  );
}

export default HomePage;
