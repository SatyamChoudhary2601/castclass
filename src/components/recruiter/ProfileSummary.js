import React from 'react'
import { Card, CardBody, CardFooter, Row, Col} from "reactstrap";
import FalconCardHeader from '../common/FalconCardHeader';


const ProfileSummary = ({title, data}) => {
	console.log(data,"this is dataaaaaaaaaaa")
  return(
		<Card className="mb-3">
      <FalconCardHeader title={title} />

      <CardBody className="text-justify">
      {data?.map(item => (<>
          <Row>
        <Col md="4">Company Location:</Col>
        <Col md="8">{item.company_city}, {item.company_state}, {item.company_country}</Col>
      </Row>
      <br />
      <Row>
        <Col md="4">Business Type:</Col>
        <Col md="8">{item.business_type}</Col>
      </Row>
      <br />
      <Row>
        <Col md="4">Main Products/Services:</Col>
        <Col md="8">{item.products_services}</Col>
      </Row>
      <br />
      <Row>
        <Col md="4">Year Established:</Col>
        <Col md="8">{item.year_established}</Col>
      </Row>
      <br />
      <Row>
        <Col md="4">Number of Emp:</Col>
        <Col md="8">{item.number_of_emp}</Col>
      </Row>
      <br />
      <Row>
        <Col md="4">Total Annual Sales:</Col>
        <Col md="8">{item.total_annual_sales}</Col>
      </Row>
      <br />
      <Row>
        <Col md="4">Main Markets:</Col>
        <Col md="8">{item.main_markets}</Col>
      </Row>
      <br />
      <Row>
        <Col md="4">Certifications:</Col>
        <Col md="8">{item.certifications}</Col>
      </Row>
      <br />
      <Row>
        <Col md="4">Product Certifications:</Col>
        <Col md="8">{item.product_certifications}</Col>
      </Row>
      <br />
      <Row>
        <Col md="4">Headquarter:</Col>
        <Col md="8">{item.headquarter}</Col>
      </Row>
        </>))}
      

      </CardBody>

      <CardFooter className="bg-light p-0 border-top">
        
      </CardFooter>
    </Card>
		)
}
export default ProfileSummary