import React from 'react'
import { Card, CardBody, CardFooter} from "reactstrap";
import FalconCardHeader from '../common/FalconCardHeader';


const Discussion = ({title}) => {
	return(
		<Card className="mb-3">
      <FalconCardHeader title={title} />

      <CardBody className="text-justify">
        No Data for Discussion!!!
      </CardBody>

      <CardFooter className="bg-light p-0 border-top">
        
      </CardFooter>
    </Card>
		)
}
export default Discussion