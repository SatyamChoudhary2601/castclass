import React, { Fragment } from 'react';
//import useFakeFetch from '../../hooks/useFakeFetch';
import { Card, CardBody } from 'reactstrap';
import FalconCardHeader from '../common/FalconCardHeader';
import { Link } from 'react-router-dom';
//import Loader from '../common/Loader';
//import { isIterableArray } from '../../helpers/utils';
//import PersonFollow from './PersonFollow';
//import rawPeople from '../../data/people/people';
//import imgProfile from '../../assets/img/illustrations/omega.png';
import Education from '../education/Education';
import educations from '../../data/education/educations';
import imgage from '../../assets/img/icons/omega.png';

//const resolvedPeople = rawPeople.slice(0, 6);

const AddToFeed = () => {
  //const { loading: peopleLoading, data: people } = useFakeFetch(resolvedPeople);

  return (
    <Fragment>
    <Card className="mb-3">
      <FalconCardHeader title="Profile Completion" titleTag="h5">
        {/* <Link className="fs--1" to="/pages/people">
          See all
        </Link> */}
      </FalconCardHeader>
      <CardBody className="siquer">
      <span className="profile-center">35%</span>
        {<img src={imgage} className="icon logoimg" alt="" />}
        <Link className="text-center invite-text" to="/">
          Invite Your Friends
        </Link>
      </CardBody>
      
    </Card>

    <Card className="mb-3">
     
      <Education educations={educations} className="" />
   
    </Card>
    </Fragment>
  );
};

export default AddToFeed;
