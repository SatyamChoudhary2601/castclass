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
import FalconPlyr from '../common/FalconPlyr';


const FeedInterest = () => {
  

  return (
    <Card className="mb-3">
      <FalconCardHeader title="Personal Video" titleTag="h5" />
      <CardBody className="fs--1">
       <FalconPlyr videoId="bTqVqk7FSmY" type="youtube" />
      </CardBody>
      
    </Card>

    
  );
};

export default FeedInterest;
