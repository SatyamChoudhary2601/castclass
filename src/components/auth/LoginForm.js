import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory, Redirect, Link, Switch, BrowserRouter, Router, Route, withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Form, Row, Col, FormGroup, Input, CustomInput, Label } from 'reactstrap';
import Divider from '../common/Divider';
import withRedirect from '../../hoc/withRedirect';
import config from './../../helpers/config';
import $ from 'jquery';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { LinkedIn } from 'react-linkedin-login-oauth2';

import { useGoogleLogin } from 'react-google-login'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const LoginForm = ({ setRedirect, hasLabel, layout }) => {

  const callApi = (paramdata, loginType) => {
    let url = config.API_URL() + 'login';
    if (loginType == "basic")
      url = config.API_URL() + 'login';
    else
      url = config.API_URL() + 'fb_login';

    $.ajax({
      url: url,
      // dataType: "json",
      // contentType: "application/json;charset=utf-8",
      type: 'POST',
      data: paramdata,
      cache: false,
      success: function (data) {
        // console.log(data);
        // debugger
        if (loginType == "basic"){
        localStorage.setItem("name", data.result.data.name);
        localStorage.setItem("user_id", data.result.data.userProfileId);
        localStorage.setItem("user_profile_id", data.result.data.userProfileId);
        }else{
          localStorage.setItem("name", paramdata.name);
        }
        localStorage.setItem("default_user", data.result.data.default_user);

        if (data.resultType == 'F') {
          toast.error(data.msg);
        } else {
          if (loginType == "basic")
            toast.success(`Successfully logged as ${email}`);
          else
            toast.success(`Successfully logged as ${email}`);

          history.push("/homepage");
        }

      }.bind(this),
      error: function (xhr, status, err) {
        toast.error(xhr.responseText);
      }.bind(this)
    });
  };

  //   email: "monu@cwebconsultants.com"
  // familyName: "Singh"
  // givenName: "Monu"
  // googleId: "110700467748932612037"
  // imageUrl: "https://lh5.googleusercontent.com/-SNZ3KTKED9c/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucniX6TQlr-MRftxpo3oVaHGcRcuCQ/s96-c/photo.jpg"
  // name: "Monu Singh"
  const handleSuccess = (data) => {
    this.setState({
      code: data.code,
      errorMessage: '',
    });
  }

  const handleFailure = (error) => {
    this.setState({
      code: '',
      errorMessage: error.errorMessage,
    });
  }

  const responseGoogle = (response) => {
    console.log(response);
    const data = {
      'email': response?.profileObj?.email,
      'provider_id': response.profileObj?.googleId,
      "name": response?.profileObj?.name,
      "avatar": response?.profileObj?.imageUrl,
      "access_token": response?.tokenObj?.access_token,
      "provider": "Google Plus"

    };
    console.log(data);
    if (response?.profileObj) {
      callApi(data, "social");
    }
  }

  const responseFacebook = (response) => {
    console.log(response);
    const data = {
      'email': response?.email,
      'provider_id': response.id,
      "name": response?.name,
      "avatar": response?.picture?.data?.url,
      "access_token": response?.accessToken,
      "provider": "facebook"

    };

    if (response.accessToken) {
      callApi(data, "social");
    }
  }

  // State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
  let history = useHistory();
  // Handler
  const handleSubmit = e => {
    e.preventDefault();
    let data = {
      'email': email,
      'password': password,
    }
    callApi(data, "basic");
  }



  useEffect(() => {
    if (localStorage.getItem("default_user") != null)
      history.push("/homePage");
  }, []);

  useEffect(() => {
    setIsDisabled(!email || !password);
  }, [email, password]);

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        {hasLabel && <Label>Email address</Label>}
        <Input
          placeholder={!hasLabel ? 'Email address' : ''}
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="email"
        />
      </FormGroup>
      <FormGroup>
        {hasLabel && <Label>Password</Label>}
        <Input
          placeholder={!hasLabel ? 'Password' : ''}
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          type="password"
        />
      </FormGroup>
      <Row className="justify-content-between align-items-center">
        <Col xs="auto">
          <CustomInput
            id="customCheckRemember"
            label="Remember me"
            checked={remember}
            onChange={({ target }) => setRemember(target.checked)}
            type="checkbox"
          />
        </Col>
        <Col xs="auto">
          <Link className="fs--1" to={`/authentication/${layout}/forget-password`}>
            Forget Password?
          </Link>
        </Col>
      </Row>
      <FormGroup>
        <Button color="primary" block className="mt-3" disabled={isDisabled}>
          Log in
        </Button>
      </FormGroup>
      <Divider className="mt-4">or log in with</Divider>
      {/* <SocialAuthButtons /> */}
      {/* <FormGroup className="mb-0"> */}
      <Row noGutters>

        <Col sm={6} className="pr-sm-1">
          {/* <Button color="outline-google-plus" size="sm" block className="mt-2" to="#!">
            <FontAwesomeIcon icon={['fab', 'google-plus-g']} transform="grow-8" className="mr-2" /> google
        </Button> */}
          <GoogleLogin
            clientId="336504669914-9m80geisusa8olrnab96eior4shfgs8c.apps.googleusercontent.com"
            buttonText="Google plus"
            autoLoad={false}
            className="mt-2 btn btn-outline-google-plus btn-sm btn-block googlePlus"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />,
        </Col>
        <Col sm={6} className="pl-sm-1">
          {/* <Button color="outline-facebook" size="sm" block className="mt-2" to="#!">
              <FontAwesomeIcon icon={['fab', 'facebook-square']} transform="grow-8" onClick="" className="mr-2" /> facebook
        </Button> */}
          <FacebookLogin
            appId="645142709418900"
            autoLoad={false}
            fields="name,email,picture"
            scope="public_profile,user_friends"
            size="metro"
            cssClass="mt-2 btn btn-outline-facebook btn-sm btn-block fb"
            textButton="  - facebook"
            callback={responseFacebook}
            icon="fa-facebook" />
        </Col>
      </Row>
      <Row noGutters> <Col sm={12} className="pr-sm-1" style={{ textAlign: "center" }}>
        <LinkedIn
          clientId="7895a2kwm6jpum"
          onFailure={handleFailure}
          onSuccess={handleSuccess}
          redirectUri="http://localhost:3000/authentication/basic/login"
        />
      </Col></Row>
    </Form>
  );
};

LoginForm.propTypes = {
  setRedirect: PropTypes.func.isRequired,
  layout: PropTypes.string,
  hasLabel: PropTypes.bool
};

LoginForm.defaultProps = {
  layout: 'basic',
  hasLabel: false
};

export default withRedirect(LoginForm);
