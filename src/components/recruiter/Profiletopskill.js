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
      <FalconCardHeader title="Skill Rolles Hire For" titleTag="h5" />
      <CardBody className="fs--1">
       <h6 class="text-1000 mb-1">IT Developer</h6>
       <h6 class="text-1000 mb-1">Project Manager</h6>
       <h6 class="text-1000 mb-1">Web Developer</h6>
       <h6 class="text-1000 mb-1">Web Design</h6>
       <h6 class="text-1000 mb-1">SEO Expert</h6>
      </CardBody>
      
    </Card>

    
  );
};

export default FeedInterest;
