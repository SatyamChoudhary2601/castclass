import React from 'react'
import { Card, CardBody, CardFooter, Table,Container, Row, Col, Input, FormGroup, Label} from "reactstrap";
import FalconCardHeader from '../common/FalconCardHeader';


const PrivateCertifier = ({title}) => {
	return(
		<Card className="mb-3">
      <FalconCardHeader title={title} />

      <CardBody className="text-justify">
      
        No Data
      </CardBody>

      <CardFooter className="bg-light p-0 border-top">
        
      </CardFooter>
    </Card>
		)
}
export default PrivateCertifier