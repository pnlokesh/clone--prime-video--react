import styled from 'styled-components/macro';

export const Container = styled.div`
  margin: 20px 0;
  overflow-x: hidden;
`;

export const RowTitle = styled.h1`
  font-size: clamp(0.75rem, 3vw, 1rem);
  font-weight: 400;
  padding: 10px;
`;

export const CardsContainer = styled.ul`
  padding: 10px 0;
  /* height: 100%; */

  .slick-arrow {
    color: #fff;
    z-index: 10;
    height: 99%;
    top: 49%;
    width: 10vw;
    padding: 3vw;
    @media screen and (min-width: 1440px) {
      width: 150px;
      padding: 50px;
    }
  }

  .slick-next {
    background: linear-gradient(270deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    right: -3vw;
    @media screen and (min-width: 1440px) {
      background: none;
      right: -100px;
    }
  }

  .slick-prev {
    background: linear-gradient(90deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    left: -3vw;
    @media screen and (min-width: 1440px) {
      background: none;
      left: -90px;
    }
  }
`;

export const Card = styled.li`
  cursor: pointer;
  overflow: hidden;
  position: relative;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const CardPoster = styled.div`
  /* height: 200px; */
  @media screen and (min-width: 768px) {
    height: min(315px, 22vw);
  }
  @media screen and (max-width: 768px) {
    height: 33vw;
  }
  @media screen and (max-width: 500px) {
    height: 45vw;
  }

  img {
    object-fit: contain;
    height: 100%;
  }
`;

export const CardHover = styled.div`
  overflow: hidden;
  /* display: none; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  padding: 0 5px;
  transition: top 0.25s ease-in-out, background 0.25s ease-in-out 0.15s;
  /* transition: all 0.3s ease-in-out; */

  ${Card}:hover & {
    /* display: block; */
    top: 0;
    background: rgba(0, 0, 0, 0.75);
  }
`;

export const CardTitle = styled.h2`
  text-align: center;
  font-size: clamp(1rem, 2vw, 1.5rem);
  font-weight: 700;
  padding: 10px 0;
`;

export const CardDesc = styled.p`
  font-size: clamp(1rem, 3vw, 1.5rem);
  font-weight: 400;
  padding: 15px 0;
`;

export const CardRating = styled.div`
  text-align: center;
  .MuiRating-root {
    font-size: clamp(1rem, 3vw, 1.25rem);
  }
`;
