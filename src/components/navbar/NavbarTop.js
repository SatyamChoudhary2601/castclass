import React, { useContext } from 'react';
import { Collapse, Navbar, NavItem, Nav } from 'reactstrap';
import AppContext from '../../context/Context';
import Logo from './Logo';
import SearchBox from './SearchBox';
import ProfileDropdown from './ProfileDropdown';
import NotificationDropdown from './NotificationDropdown';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { faBuilding,faQuestion } from "@fortawesome/free-solid-svg-icons";
import recruiticon from '../../assets/img/myicons/hiring.svg';
import notification from '../../assets/img/myicons/notification.svg';
import './NavbarTop.css'



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import classNames from 'classnames';

const NavbarTop = () => {
  const { showBurgerMenu, setShowBurgerMenu } = useContext(AppContext);
  //const { shoppingCart } = useContext(ProductContext);

  return (
    <Navbar light className="navbar-glass fs--1 font-weight-semi-bold row navbar-top sticky-kit fix-position" expand>
      {/* <div className="toggle-icon-wrapper d-xl-none">
        <button
          className="navbar-vertical-toggle btn btn-link d-flex align-item-center justify-content-center "
          onClick={() => {
            setShowBurgerMenu(!showBurgerMenu);
          }}
          id="burgerMenu"
        >
          <span className="navbar-toggle-icon">
            <span className="toggle-line" />
          </span>
        </button>
      </div> */}
      <Logo at="navbar-top" width={40} id="topLogo" />
      <Collapse navbar>
        <Nav navbar className="align-items-center d-none d-lg-block">
          <NavItem>
            <SearchBox />
          </NavItem>

        </Nav>

        <Nav navbar className="align-items-center ml-auto">
          {/* <NavItem>         */}
          <Link to="/"><FontAwesomeIcon icon="home" color="#49C4F9" size="lg" className="mn10"></FontAwesomeIcon></Link>
          <Link to="/pages/profileActivities"><FontAwesomeIcon icon="user" color="#6CD382" size="lg" className="mn10"></FontAwesomeIcon></Link>

          <Link to="/pages/recruiter"><img src={recruiticon}  width="20" className="mn10"></img></Link>

          <Link to="/pages/company"><FontAwesomeIcon icon={faBuilding} color="#6B798B" size="lg" className="mn10"></FontAwesomeIcon></Link>
          <Link to="/pages/faq"><FontAwesomeIcon icon={faQuestion} color="#B6BAC5" size="lg" className="mn10"></FontAwesomeIcon></Link>
          <ProfileDropdown />

          <Link to="/"><h6 className="mn10">Jobs</h6></Link>
          <Link to="/pages/billing"><h6 className="mn10 clr-red"><u >try Premium</u></h6></Link>
          {/* </NavItem> */}
          <NotificationDropdown /> 
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavbarTop;
