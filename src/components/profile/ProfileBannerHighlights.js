import React, { Fragment } from 'react';
import { Col, Row } from 'reactstrap';
import NavItemWithViewText from '../navbar/NavItemWithViewText';


const ProfileBannerHighlights = ({ }) => {
  return (
    <Col className="pl-2 pl-lg-3">
      <h5 className="text-left pt-2 clr-prof-highlight" >Profile Highlights</h5>
      <NavItemWithViewText
        item={{ name: "Certification", path: "/Certification", color: "#E7EAFA", border: "#E7EAFA", count: 0 }}>
      </NavItemWithViewText>
      <NavItemWithViewText
        item={{ name: "Recomendations", path: "/Recomendations", color: "#E7EAFA", border: "#E7EAFA", count: 0 }}>
      </NavItemWithViewText>
      <NavItemWithViewText
        item={{ name: "Regrets", path: "/Regrets", color: "#E7EAFA", border: "#E7EAFA", count: 0 }}>
      </NavItemWithViewText>

    </Col>
  );
};



ProfileBannerHighlights.defaultProps = {
  previousJobs: []
};

export default ProfileBannerHighlights;
