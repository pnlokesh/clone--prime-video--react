import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LanguageIcon from '@material-ui/icons/Language';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

import {
  Header,
  Logo,
  Nav,
  NavLeft,
  NavRight,
  NavRightItem,
  NavLeftItem,
  NavMobileToggle,
} from './NavbarStyles';
import useWindowSize from '../../utils/windowSizeHook';
import logoImg from '../../images/prime-video-logo-white.png';

function Navbar() {
  const [navToggle, setNavToggle] = useState(false);

  const handleNavToggle = () => {
    setNavToggle(!navToggle);
  };

  const windowSize = useWindowSize();
  useEffect(() => {
    if (windowSize.width > 900) {
      setNavToggle(false);
      // console.log(windowSize.width);
    }
  }, [windowSize.width]);

  return (
    <Header>
      <div className="container">
        <Logo src={logoImg} alt="prime video logo" />

        <Nav navToggle={navToggle}>
          <NavLeft onClick={(navToggle) => navToggle && handleNavToggle()}>
            <NavLeftItem>
              <NavLink to="/" activeClassName="navlink-active">
                Home
              </NavLink>
            </NavLeftItem>
            <NavLeftItem>
              <NavLink to="/movies" activeClassName="navlink-active">
                Movies
              </NavLink>
            </NavLeftItem>
            <NavLeftItem>
              <NavLink to="/tvshows" activeClassName="navlink-active">
                TV Shows
              </NavLink>
            </NavLeftItem>
            <NavLeftItem>
              <NavLink to="/kids" activeClassName="navlink-active">
                Kids
              </NavLink>
            </NavLeftItem>
          </NavLeft>

          <NavRight>
            <NavRightItem className="search">
              <SearchIcon />
              <input type="text" placeholder="Search" />
            </NavRightItem>

            <NavRightItem className="languages">
              <LanguageIcon />
              {navToggle && <span>Website Language - &nbsp;</span>}
              <span>EN</span>
              {navToggle ? (
                <ExpandMoreOutlinedIcon className="expand-more-icon" />
              ) : (
                <ArrowDropDownIcon />
              )}
            </NavRightItem>

            <NavRightItem
              onClick={(navToggle) => navToggle && handleNavToggle()}
            >
              <Link to="/">Sign In</Link>
            </NavRightItem>
          </NavRight>
        </Nav>

        <NavMobileToggle>
          {!navToggle ? (
            <PersonOutlineOutlinedIcon
              fontSize="large"
              onClick={handleNavToggle}
            />
          ) : (
            <CloseOutlinedIcon fontSize="large" onClick={handleNavToggle} />
          )}
        </NavMobileToggle>
      </div>
    </Header>
  );
}

export default Navbar;
