import React, { useEffect, useState } from 'react';
import { Button, Nav, NavItem, NavLink } from 'reactstrap';
import ItemBanner from './RecruiterItemBanner';
import sh from '../../assets/img/icons/sh.png';
import lk from '../../assets/img/icons/lk.png';
import Background from '../common/Background';
import gallery2 from '../../assets/img/gallery/bg1.jpg';
import gallery from '../../assets/img/gallery/bg5.png';

import { Link } from 'react-router-dom';
import Dropdown from 'react-dropdown';
const options = ['Manage', 'Dummy', 'Setting'];
const defaultOption = options[0];
const Topnav = (props) => {
  const [selectedButton, setselectedButton] = useState(0);

  useEffect(() => {
    console.log("selectedButton=" + selectedButton);
  }, []);
  return (

    <div class="topbar">
      <div className="mn-tp20 mn-bt20 btns-cont">

        <span className={"large", selectedButton == 0 ? "btn-select" : "btn-unselect"} onClick={() => setselectedButton(0)}>Admin View</span>
        <span className={selectedButton == 1 ? "btn-select" : "btn-unselect"} onClick={() => setselectedButton(1)}>Editor</span>
        <span className={selectedButton == 2 ? "btn-select" : "btn-unselect"} onClick={() => setselectedButton(2)}>Recruiter</span>
        <span className={selectedButton == 3 ? "btn-select" : "btn-unselect"} onClick={() => setselectedButton(3)}>Advertiser </span>
        <span className={selectedButton == 4 ? "btn-select" : "btn-unselect"} onClick={() => setselectedButton(4)}>Private Certifier</span>
        <Dropdown className="dropme" controlClassName='newwd' options={options} value={defaultOption} />

      </div>
    </div>
  );
}


const RecruiterBanner = () => (
  <ItemBanner>
    <Background image={gallery2} overlay="1" className="rounded-soft" />
    <div class="rmbr2">
      <ItemBanner.Body
        name="Spinel Recruitment"
        headline="469 Logon Way,North heart London"
        location={<img src={gallery} rounded width='150px' alt="" />}
        noOfFollowers={40}
        previousJobs={[
          { institution: 'Like(34)', src: lk },
          { institution: 'Post Share(112)', src: sh },
        ]}>
        <Button color="falcon-primary" size="sm" className="px-3">
          Followers(40)
          </Button>
        <Button color="falcon-primary" size="sm" className="px-3 ml-2">
          Following(30)
      </Button>
      </ItemBanner.Body>
    </div>
  </ItemBanner>
);

export default RecruiterBanner;
