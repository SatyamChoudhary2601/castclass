import React from 'react'
import { Card, CardBody, CardFooter, Table} from "reactstrap";
import FalconCardHeader from '../common/FalconCardHeader';


const CompanyProduct = ({title}) => {
	return(
		<Card className="mb-3">
      <FalconCardHeader title={title} />

      <CardBody className="text-justify">
        <Table bordered>
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Job Description</th>
              <th>Job Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              No Data
            </tr>
          </tbody>
          <tfoot/>
        </Table>
      </CardBody>

      <CardFooter className="bg-light p-0 border-top">
        
      </CardFooter>
    </Card>
		)
}
export default CompanyProduct