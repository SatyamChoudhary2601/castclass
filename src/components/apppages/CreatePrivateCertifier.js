import React, { useState } from "react";
import {
  Label,
  Form,
  Button,
  FormGroup,
  Input,
  Card,
  CardBody,
  CardHeader,
  Container,
  Row,
  Col,
} from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import FalconCardHeader from "../common/FalconCardHeader";
import "./CompanyTabs.css";
import axios from 'axios'
import config from "../../helpers/config";

import Modal from 'react-awesome-modal';

// import data from './data.json'

const CreatePrivateCertifier = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [isRedirected, setRedirected] = useState(false)
  const [formData, setFormData] = useState({
  	 certifier_name:"",
  	 price:"",
     address:"",
     pincode:"",
     phone:"",
     email:"",
     number_of_emp:"",
     year_of_establish:"",
     company_info:"",
     company_registration:"",
     skills:"",
     profile_pic:"",
     status:""
  });
  const {
  	certifier_name,
	price,
    address,
	pincode,
	phone,
 	email,
	number_of_emp,
	year_of_establish,
	company_info,
	company_registration,
	skills,
	profile_pic,
	status
} = formData;

  const onChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeHandlerFile = e => {
    setFormData({
      ...formData,
      profile_pic: e.target.files[0]
    })
  }

  const onChangeHandlerFileBanner = e => {
    setFormData({
      ...formData,
      banner:e.target.files[0]
    })
  }

  const handleSubmit = (e) => {
  	e.preventDefault()
  	let params = new URLSearchParams()
  	params.append('default_user', localStorage.getItem('default_user'))
  	params.append('certifier_name', certifier_name)
  	params.append('price', price)
  	params.append('address', address)
  	params.append('pincode', pincode)
  	params.append('phone', phone)
  	params.append('email', email)
  	params.append('number_of_emp', number_of_emp)
  	params.append('year_of_establish', year_of_establish)
  	params.append('company_info', company_info)
  	params.append('company_registration', company_registration)
  	params.append('skills', skills)
  	params.append('profile_pic', profile_pic)
  	params.append('status', status)

  	const config = {
 		 headers: {
    		'Content-Type': 'application/x-www-form-urlencoded'
  			}
	}

	axios.post('http://139.59.35.110/castclass/api/v2/privatecertifier', params, config)
  		.then((result) => console.log(result))
  
  	console.log("hello", formData)
  }

   const closeModal = () => {
        setModalOpen(false)
        setRedirected(true)
    }
    if(isRedirected === true){
      return <Redirect to="/pages/company"/>
    }
  return (
    <>
    <Modal visible={isModalOpen} width="400" height="300" effect="fadeInUp" onClickAway={() =>closeModal()}>
        <div style={{textAlign:"center"}}>
            <img src="https://webstockreview.net/images/check-clipart-gif-animation-18.gif" width="200px" style={{marginTop:'0px', textAlign:'center'}}/>

            <h1 style={{textAlign:'center'}}>Success</h1>
            <p style={{textAlign:'center'}}>Operation processed successfully</p>
            <Button style={{marginTop:'2px'}} color="primary" size="lg" onClick={() => closeModal()}>OK</Button>
        </div>
    </Modal>
      <Card className="mb-3">
        <FalconCardHeader
          title="Create Private Certifier"
          titleTag="h5"
          className="bg-light text-left pad-cl card-header"
        />
        <CardBody className="fs--1">
      <Container>
        <Row>
          <Col md="8">
          <Form onSubmit={handleSubmit}>
            <FormGroup className="required">
              <Label >Certifier Name</Label>

              <Input
                type="text"
                placeholder="Certifier Name"
                name="certifier_name"
                value={certifier_name}
                required
                onChange={(e) => onChangeHandler(e)}
              />
            </FormGroup>

            <FormGroup className="required">
              <Label>Price</Label>

              <Input
                type="text"
                placeholder="Price"
                name="price"
                value={price}
                required
                onChange={(e) => onChangeHandler(e)}
              />
            </FormGroup>


            <FormGroup className="required">
              <Label>Address</Label>

              <Input
                type="text"
                placeholder="Address"
                name="address"
                value={address}
                required
                onChange={(e) => onChangeHandler(e)}
              />
            </FormGroup>

            <FormGroup className="required">
              <Label>Pincode</Label>

              <Input
                type="text"
                name="pincode"
                value={pincode}
                required
                onChange={(e) => onChangeHandler(e)}
              />
                
              
            </FormGroup>

            <FormGroup>
              <Label>Phone</Label>

              <Input
                type="text"
                placeholder="Phone"
                name="phone"
                value={phone}
                onChange={(e) => onChangeHandler(e)}
              />
            </FormGroup>

            <FormGroup className="required">
              <Label>Email</Label>

              <Input
                type="text"
                placeholder="Email"
                name="email"
                value={email}
                required
                onChange={(e) => onChangeHandler(e)}
              />
            </FormGroup>

            <FormGroup className="required">
              <Label>Number of Employee</Label>
              <Input
                type="text"
                placeholder="Number of Employee"
                name="number_of_emp"
                value={number_of_emp}
                required
                onChange={(e) => onChangeHandler(e)}
              />
            </FormGroup>

            <FormGroup className="required">
              <Label> Year of Establish</Label>

              <Input
                type="text"
                placeholder="Year of Establish"
                name="year_of_establish"
                value={year_of_establish}
                required
                onChange={(e) => onChangeHandler(e)}
              />
            </FormGroup>

            <FormGroup className="required">
              <Label> Company Info</Label>

              <Input
                type="text"
                placeholder="Company Info"
                name="company_info"
                value={company_info}
                required
                onChange={(e) => onChangeHandler(e)}
              />
            </FormGroup>
            <FormGroup className="required">
              <Label> Company Registration</Label>

              <Input
                type="text"
                placeholder="Company Registration"
                name="company_registration"
                value={company_registration}
                required
                onChange={(e) => onChangeHandler(e)}
              />
            </FormGroup>
            <FormGroup className="required">
              <Label> Skills</Label>

              <Input
                type="text"
                placeholder="Skills"
                name="skills"
                value={skills}
                required
                onChange={(e) => onChangeHandler(e)}
              />
            </FormGroup>
            <FormGroup className="required">
              <Label>Profile Picture</Label>
              <Input
                type="file"
                name="profile_pic"
                
                required
                onChange={(e) => onChangeHandlerFile(e)}
              />
            </FormGroup>
            

            <FormGroup>
              <Label>Status</Label>

              <Input
                type="select"
                placeholder="Status"
                name="status"
                value={status}
                onChange={(e) => onChangeHandler(e)}
              >
              	<option value="1">Active</option>
              	<option value="0">Not Active</option>
              </Input>
            </FormGroup>
            
            <Button color="primary" className="button_btn" type="submit">
              Submit
            </Button>
            <Link to="/pages/privatecertifier">
              <Button color="secondary">Cancel</Button>
            </Link>
          </Form>
        </Col>
      <Col md="4"></Col>
    </Row>
  </Container>
        </CardBody>
      </Card>

    </>
  );
};

export default CreatePrivateCertifier;
