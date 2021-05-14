import React from 'react';
import styled from 'styled-components';
import { Footer, HomeCarousel, MoviesRow, Navbar } from '../components';
import ScrollTest from '../components/ScrollTest';

const HomeContainer = styled.div`
  overflow-x: hidden;
  background-color: #10141d;
  color: #fff;
`;

function HomePage() {
  return (
    <>
      <Navbar />

      <HomeContainer>
        {/* <ScrollTest /> */}
        <HomeCarousel />

        <MoviesRow />
        <MoviesRow />
      </HomeContainer>

      <Footer />
    </>
  );
}

export default HomePage;
