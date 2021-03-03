import React from 'react';
import { Card, CardBody } from 'reactstrap';
import FalconCardHeader from '../common/FalconCardHeader';
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
