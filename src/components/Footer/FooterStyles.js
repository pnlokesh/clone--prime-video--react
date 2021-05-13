/* eslint-disable import/prefer-default-export */
import styled from 'styled-components/macro';

export const Container = styled.footer`
  width: 100%;
  background-color: #222;
  color: #fff;
  font-size: 1rem;
  text-align: center;
  padding: 24px 0;
`;

export const Logo = styled.img`
  width: auto;
  height: 32px;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  margin: 8px;

  a {
    color: #0f79af;
  }
`;
