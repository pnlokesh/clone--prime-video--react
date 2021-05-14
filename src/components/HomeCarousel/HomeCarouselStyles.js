import styled from 'styled-components/macro';

export const Container = styled.div`
  background-color: #10141d;
  color: #fff;
  height: 60vh;

  .container {
    width: min(1440px, 100vw);
  }

  .slick-dots {
    bottom: 10%;

    li {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      width: 10px;
      height: 10px;
      box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.75);

      button {
        &::before {
          display: none;
        }
      }
    }

    .slick-active {
      background: rgba(255, 255, 255, 1);
    }
  }
`;

export const CarouselImage = styled.div`
  width: 100vw;
  height: 60vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
