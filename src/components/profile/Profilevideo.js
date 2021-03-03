import React from 'react';
import { Card, CardBody } from 'reactstrap';
import FalconCardHeader from '../common/FalconCardHeader';
import FalconPlyr from '../common/FalconPlyr';


const FeedInterest = () => {
  

  return (
    <Card className="mb-3">
      <FalconCardHeader title="Profile Video" titleTag="h5" />
      <CardBody className="fs--1">
       <FalconPlyr videoId="bTqVqk7FSmY" type="youtube" />
      </CardBody>
      
    </Card>

    
  );
};

export default FeedInterest;
