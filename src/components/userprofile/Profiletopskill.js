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


const FeedInterest = () => {
  

  return (
    <Card className="mb-3">
      <FalconCardHeader title="Top Skills" titleTag="h5" />
      <CardBody className="fs--1">
       <p class="text-1000 mb-0">UI/UX</p>
       <p class="text-1000 mb-0">HTML5</p>
       <p class="text-1000 mb-0">WEB Design</p>
       <p class="text-1000 mb-0">Logo Design</p> 
       <p class="text-1000 mb-0">WEB Design</p>
       <p class="text-1000 mb-0">Logo Design</p> 
      </CardBody>
      
    </Card>

    
  );
};

export default FeedInterest;
