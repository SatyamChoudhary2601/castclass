import React from 'react';
import { Button,Nav,NavItem,NavLink} from 'reactstrap';
import ItemBanner from '../item/ItemBanner';
//import g from '../../assets/img/logos/g.png';
//import hp from '../../assets/img/logos/hp.png';
import sh from '../../assets/img/icons/sh.png';
import lk from '../../assets/img/icons/lk.png';
//import team2 from '../../assets/img/team/2.jpg';
//import generic4 from '../../assets/img/generic/4.jpg';
//import apple from '../../assets/img/logos/apple.png';
import Background from '../common/Background';
import gallery2 from '../../assets/img/gallery/bg1.jpg';
import gallery from '../../assets/img/gallery/bg5.png';
import Drtable from './Dropdowntable';

import { Link } from 'react-router-dom';
import Dropdown from 'react-dropdown';

const options = ['Manage', 'Dummy', 'Setting'];
const defaultOption = options[0];

const Topnav = (props) => {
  
  return (
    <div class="topbar">
      <Nav pills>
  <NavItem>
    <NavLink tag= {Link} to="#" >Admin View</NavLink>
  </NavItem>
  <NavItem>
    <NavLink tag= {Link} to="#">Editor</NavLink>
  </NavItem>
  <NavItem>
    <NavLink tag= {Link} to="#">Recruiter</NavLink>
  </NavItem>
  <NavItem>
    <NavLink tag= {Link} to="#">Advertiser </NavLink>
  </NavItem>
  <NavItem>
    <NavLink tag= {Link} to="#" active> Private Certifier</NavLink>
  </NavItem>
   <Dropdown controlClassName='newwd' options={options} value={defaultOption} />
  <NavItem>
    
  </NavItem>
</Nav>
      </div>
  );
}

const Belownav = (props) => {
  
  return (
    <div class="blow">
      <Nav pills>
      <NavItem>
        <NavLink tag= {Link} to="#" >About Us</NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag= {Link} to="/pages/com_profile">Company Profile</NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag= {Link} to="#">Recruiter List</NavLink>
      </NavItem>
      <NavItem>
        <NavLink  tag= {Link} to="/pages/certified_cand"> Certified Condidates</NavLink>
      </NavItem>
      <NavItem>
        <NavLink  tag= {Link} to="/pages/appliedad_cand" active> Applied Candidate</NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag= {Link} to="/pages/recruiter" >Discussion</NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag= {Link} to="#">Jobs</NavLink>
      </NavItem>
      <NavItem>
        <NavLink  tag= {Link} to="#"> Join as candidate</NavLink>
      </NavItem>
      </Nav>
    </div>
  );
}


const ProfileBanner = () => (

  <div class="rmbr">
  <Topnav/>
  <ItemBanner>
  
    <Background image={gallery2} overlay="1" className="rounded-soft" />
    <div class="rmbr2">
    <ItemBanner.Body
      name="Spinel Recruitment"
      headline="469 Logon Way,North heart London"
      location=<img src={gallery}  rounded width='150px' alt=""/>
      noOfFollowers={40}
      previousJobs={[
        { institution: 'Like(34)', src: lk },
        { institution: 'Post Share(112)', src: sh },
      ]}
    >
      <Button color="falcon-primary" size="sm" className="px-3">
        Follow
      </Button>
      <Button color="falcon-primary" size="sm" className="px-3 ml-2">
        Share
      </Button>
    </ItemBanner.Body>
    </div>
  </ItemBanner>
 <Belownav/>
 <Drtable/>
 </div>
);

export default ProfileBanner;
