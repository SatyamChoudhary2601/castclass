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

//const resolvedEvents = rawEvents.slice(3);

const FeedInterest = () => {
  //const { loading, data: events } = useFakeFetch(resolvedEvents);

  return (
    <Card className="mb-3">
      <FalconCardHeader title="Recommened Jobs" titleTag="h5" />
      <CardBody className="fs--1">
        <p>Data Comming Soon</p>
      </CardBody>
      {/*<FalconCardFooterLink title="All Events" to="/pages/events" />*/}
    </Card>

    
  );
};

export default FeedInterest;
