import React from 'react'
import { Card, CardBody, CardFooter, Table,Container, Row, Col, Input, FormGroup, Label} from "reactstrap";
import FalconCardHeader from '../common/FalconCardHeader';


const AppliedCandidate = ({title}) => {
	return(
		<Card className="mb-3">
      <FalconCardHeader title={title} />

      <CardBody className="text-justify">
      <Container>
        <Row>
          <Col md="4">
            <FormGroup>
            <Label>Contact Certifier</Label>
            <Input type="select">
              <option>Select</option>
              <option>Contracted</option>
              <option>Pending</option>
              <option>Not Contracted</option>
            </Input>
            </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup>
            <Label>Certification Rating</Label>
            <Input type="select">
              <option>Select</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
            </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup>
            <Label>Recom. Candidate</Label>
            <Input type="select">
              <option>Select</option>
              <option>Recommended</option>
              <option>Regret</option>
            </Input>
            </FormGroup>
          </Col>
          
        </Row>
        <Row>
          <Col md="4">
            <FormGroup>
            <Label>Job Title</Label>
            <Input type="select">
              <option>New</option>
              <option>Developer</option>
            </Input>
            </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup>
            <Label>Status</Label>
            <Input type="select">
              <option>Select</option>
              <option>Applied</option>
              <option>Shortlisted</option>
              <option>Finalized</option>
              <option>Rejected</option>
            </Input>
            </FormGroup>
          </Col>
        </Row>
        </Container>
        <Table bordered>
          <thead>
            <tr>
              <th>Data</th>
              <th>Job Title</th>
              <th>Certfication</th>
              <th>Rating</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Name of Rec. Company</th>
              <th>Contact Certifier</th>
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
export default AppliedCandidate