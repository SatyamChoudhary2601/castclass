import React from 'react';
import { Card, CardBody } from 'reactstrap';
import FalconCardHeader from '../common/FalconCardHeader';
//import { isIterableArray } from '../../helpers/utils';
//import EventSummary from '../event/EventSummary';
//import FalconCardFooterLink from '../common/FalconCardFooterLink';
//import useFakeFetch from '../../hooks/useFakeFetch';
//import Loader from '../common/Loader';
//import createMarkup from '../../helpers/createMarkup';
//import rawEvents from '../../data/event/events';
//import FalconPlyr from '../common/FalconPlyr';
import contact from '../../assets/img/logos/contact.png';
const FeedInterest = () => {
  

  return (
    <Card className="mb-3">
      <FalconCardHeader title="Contact Candidate" titleTag="h5" />
      <CardBody className="fs--1">
        <h5>{<img src={contact} className="icon" alt="" width="30"/>}<span class="pad">8976543345</span></h5>
      </CardBody>
      
    </Card>

    
  );
};

export default FeedInterest;
