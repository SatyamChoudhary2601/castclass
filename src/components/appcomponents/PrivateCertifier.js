import React from "react";
import { Card, CardBody, Button } from "reactstrap";
import FalconCardHeader from "../common/FalconCardHeader";
import { Link } from "react-router-dom";

const PrivateCertifier = () => {
	return(
			<Card className="mb-3">
      <FalconCardHeader title="Private Certifier" titleTag="h5" />
      <CardBody className="fs--1">
      
 

      <Link to="/pages/privatecertifier">
       Private Certifier Listing
      </Link>
           </CardBody>
    </Card>
		)
}
export default PrivateCertifier;