import styled from 'styled-components/macro';

export const Header = styled.header`
  color: rgba(205, 205, 205, 1);
  background-color: rgba(26, 36, 47, 1);
  width: 100vw;
  height: 80px;
  font-size: 1rem;

  .container {
    display: flex;
    align-items: center;

    position: relative;
  }
`;

export const Logo = styled.img`
  width: auto;
  height: 40px;
  margin: 20px 0;
`;

export const Nav = styled.nav`
  font-weight: 500;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 900px) {
    display: ${(props) => !props.navToggle && 'none'};
    position: absolute;
    top: 0;
    left: -3vw;
    width: 100vw;
    height: 100vh;
    background-color: #252e39;

    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 80px 3vw;
  }
`;

export const NavLeft = styled.ul`
  display: flex;
  align-items: center;
  margin-left: 10px;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const NavLeftItem = styled.li`
  cursor: pointer;
  font-weight: 500;
  padding: 10px;
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 900px) {
    width: 92vw;
    padding: 16px 20px;
    border-bottom: 1px solid #323e4c;
    transition: background-color 0.2s ease-in-out;
    &:hover {
      background-color: #566b84;
    }
  }

  &:hover {
    font-weight: 700;
    color: #fff;
    /* border-bottom: 1px solid #fff; */
    @media screen and (max-width: 900px) {
      border: none;
    }
  }

  a {
    padding: 10px;
  }

  .navlink-active {
    font-weight: 700;
    color: #fff;
    border-bottom: 1px solid #fff;
  }
`;

export const NavRight = styled.ul`
  display: flex;
  align-items: center;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }

  .search {
    border: 1px solid rgba(205, 205, 205, 0.25);
    padding: 10px;

    input {
      font-size: 1rem;
      letter-spacing: 1px;
      height: 1.5rem;
      background: transparent;
      border: none;
      color: inherit;
      caret-color: inherit;
      @media screen and (max-width: 900px) {
        width: 92vw;
      }

      &:focus {
        outline: none;
        &::placeholder {
          color: transparent;
        }
      }
    }
  }

  .languages {
    @media screen and (max-width: 900px) {
      position: relative;

      .expand-more-icon {
        position: absolute;
        right: 20px;
      }
    }
  }
`;

export const NavRightItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: color 0.2s ease-in-out;
  margin: 10px;
  @media screen and (max-width: 900px) {
    width: 92vw;
    padding: 16px 20px;
    border-bottom: 1px solid #323e4c;
    transition: all 0.2s ease-out;
    &:hover {
      background-color: #566b84;
    }
  }

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover {
    color: #fff;
  }
`;

export const NavMobileToggle = styled.div`
  cursor: pointer;
  position: absolute;
  right: 0;
  @media screen and (min-width: 901px) {
    display: none;
  }
`;
