import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Logo, List, ListItem } from './FooterStyles';

import logoImg from '../../images/prime-video-logo-color.png';

function Footer() {
  return (
    <Container>
      <div className="container">
        <Logo src={logoImg} alt="prime video logo" />

        <List>
          <ListItem>
            <Link to="/">Terms and Privacy Notice</Link>
          </ListItem>
          <ListItem>
            <Link to="/">Send us feedback</Link>
          </ListItem>
          <ListItem>
            <Link to="/">Help</Link>
          </ListItem>
          <ListItem>
            <p>
              © 1996-{new Date().getFullYear()}, Amazon.com, Inc. or its
              affiliates
            </p>
          </ListItem>
        </List>
      </div>
    </Container>
  );
}

export default Footer;
