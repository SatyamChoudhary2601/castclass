import React, { Fragment } from 'react';
import { Card, CardBody } from 'reactstrap';
import FalconCardHeader from '../common/FalconCardHeader';
import { Link } from 'react-router-dom';
import imgage from '../../assets/img/icons/omega.png';
import omega from '../../assets/img/myicons/omega.png';



const ProfilePercent = ({ percent }) => {

  let percentage = percent + '%';


  return (
    <Fragment>
      <Card className="mb-3">
        <FalconCardHeader title="Profile Completion" titleTag="h5">
        </FalconCardHeader>
        <CardBody className="siquer txt-algn-cr">
          <h4 className="omega-text">{percentage}</h4>
          <div className="omega-black">
            <div className="omega-fill" id="home-omega" style={{ height: percentage }}></div>
            <img src={omega} />
          </div>
          <Link className="text-center invite-text" to="/">
            Invite Your Friends
        </Link>
        </CardBody>
      </Card>


    </Fragment>
  );
};

export default ProfilePercent;
