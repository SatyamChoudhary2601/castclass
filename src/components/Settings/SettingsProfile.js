import React, { useState } from 'react';
import { Button, Card, CardBody, Col, Form, Row } from 'reactstrap';
import FalconCardHeader from '../common/FalconCardHeader';
import FormGroupInput from '../common/FormGroupInput';
import Flex from '../common/Flex';
import $ from 'jquery';
import config from './../../helpers/config';
import { toast } from 'react-toastify';

const SettingsProfile = ({profileinfo}) => {
  const [firstName, setFirstName] = useState(profileinfo?.user_f_name);
  const [lastName, setLastName] = useState(profileinfo?.user_l_name);
  const [email, setEmail] = useState(profileinfo?.user_email);
  const [phone, setPhone] = useState(profileinfo?.user_phone);
  const [heading, setHeading] = useState(profileinfo?.profile_heading);
  const [intro, setIntro] = useState(profileinfo?.profile_intro);

  const handleProfileSettings = e => {
    e.preventDefault();
    console.log({ firstName, lastName, email, phone, heading, intro });
    let url = config.API_URL()+'post/updateuserinfo';

    $.ajax({
        url: url,
        type: 'POST',       
        data: {
          default_user:localStorage.getItem('default_user'),
          user_f_name:firstName,
          user_l_name:lastName,
          user_phone:phone,
          profile_heading:heading,
          profile_intro:intro,
          form_id:"user_name"
        },
        success: function(response) {
          if(response.resultType=='F'){
              toast.error(response.msg);
          }else{
              toast.success(response.msg);
          }
        },error: function (jqXHR, status, err) {
              toast.success('There is some error, try again');
        }
    })
  };
    

  return (
    // <Card className="mb-3">
    //   <FalconCardHeader title="Profile Settings" light={false} />
      <CardBody className="bg-light">
        <Form onSubmit={handleProfileSettings}>
          <Row>
            <Col lg={6}>
              <FormGroupInput
                id="first-name"
                label="First Name"
                value={firstName}
                onChange={({ target }) => setFirstName(target.value)}
              />
            </Col>
            <Col lg={6}>
              <FormGroupInput
                id="last-name"
                label="First Name"
                value={lastName}
                onChange={({ target }) => setLastName(target.value)}
              />
            </Col>
            <Col lg={6}>
              <FormGroupInput disabled
                id="email"
                label="Email"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                type="email"
              />
            </Col>
            <Col lg={6}>
              <FormGroupInput
                id="phone"
                label="Phone"
                value={phone}
                onChange={({ target }) => setPhone(target.value)}
                type="tel"
              />
            </Col>
            <Col xs={12}>
              <FormGroupInput
                id="heading"
                label="Heading"
                value={heading}
                onChange={({ target }) => setHeading(target.value)}
              />
            </Col>
            <Col xs={12}>
              <FormGroupInput
                id="intro"
                label="Intro"
                value={intro}
                onChange={({ target }) => setIntro(target.value)}
                type="textarea"
                rows="13"
              />
            </Col>
            <Col tag={Flex} xs={12} justify="end">
              <Button color="primary" type="submit" onClick={handleProfileSettings}>
                Update
              </Button>
            </Col>
          </Row>
        </Form>
      </CardBody>
    // </Card>
  );
};

export default SettingsProfile;
