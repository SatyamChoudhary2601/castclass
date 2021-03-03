import React from 'react';
import { Card, CardBody } from 'reactstrap';
import FalconCardHeader from '../common/FalconCardHeader';


const FeedInterest = () => {
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
