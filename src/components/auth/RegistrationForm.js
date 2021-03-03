import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, CustomInput, Form, FormGroup, Input, Label } from 'reactstrap';
import Divider from '../common/Divider';
import SocialAuthButtons from './SocialAuthButtons';
import withRedirect from '../../hoc/withRedirect';
import config from './../../helpers/config';
import $ from 'jquery';

const RegistrationForm = ({ setRedirect, setRedirectUrl, layout, hasLabel }) => {
  // State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setConfirmPassword] = useState('');
  const [isAccepted, setIsAccepted] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  // Handler
  const handleSubmit = e => {
    e.preventDefault();

    $.ajax({
        url: config.API_URL()+'register',
        type: 'POST',
        data: {
            'email': email,
            'name': name,
            'password': password,
            'device_id': '1b2351245342dc497d83af821415aa26668d9e187ffa26a32fef7d9aed1880f1',
            'password_confirmation': password_confirmation,
        },
        cache: false,
        success: function(data) {
          if(data.resultType=="F"){
            toast.error(`${data.result.errors}`);
          }else{
            toast.success(`Successfully registered as ${email}`);
            setRedirect(true);
          }
        }.bind(this),
        error: function(xhr, status, err) {
            toast.error(xhr.responseText);
        }.bind(this)
    });
    // fetch(config.API_URL() + 'register', {
    //   method: 'post',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     'email': email,
    //     'name': name,
    //     'password': password,
    //     'password_confirmation': password_confirmation,

    //   })
    // })
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       if (result.resultType == "S") {
    //         toast.success(result.msg);
    //         setRedirect(true);
    //         console.log("fetch api result" + JSON.stringify(result));
    //       } else {
    //         toast.error(result.msg);
    //       }
    //     },

    //     (error) => {
    //       toast.error("Error, Please try Again");

    //     }
    //   )


  };

  useEffect(() => {
    setRedirectUrl(`/authentication/${layout}/login`);
  }, [setRedirectUrl, layout]);

  useEffect(() => {
    setIsDisabled(!name || !email || !password || !password_confirmation || !isAccepted || password !== password_confirmation);
  }, [name, email, password, password_confirmation, isAccepted]);

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        {hasLabel && <Label>Name</Label>}
        <Input placeholder={!hasLabel ? 'Name' : ''} value={name} onChange={({ target }) => setName(target.value)} />
      </FormGroup>
      <FormGroup>
        {hasLabel && <Label>Email address</Label>}
        <Input
          placeholder={!hasLabel ? 'Email address' : ''}
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="email"
        />
      </FormGroup>
      <div className="form-row">
        <FormGroup className="col-6">
          {hasLabel && <Label>Password</Label>}
          <Input
            placeholder={!hasLabel ? 'Password' : ''}
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            type="password"
          />
        </FormGroup>
        <FormGroup className="col-6">
          {hasLabel && <Label>Confirm Password</Label>}
          <Input
            placeholder={!hasLabel ? 'Confirm Password' : ''}
            value={password_confirmation}
            onChange={({ target }) => setConfirmPassword(target.value)}
            type="password"
          />
        </FormGroup>
      </div>

      <CustomInput
        id="customCheckTerms"
        label={
          <Fragment>
            I accept the <Link to="#!">terms</Link> and <Link to="#!">privacy policy</Link>
          </Fragment>
        }
        checked={isAccepted}
        onChange={({ target }) => setIsAccepted(target.checked)}
        type="checkbox"
      />
      <FormGroup>
        <Button color="primary" block className="mt-3" disabled={isDisabled}>
          Register
        </Button>
      </FormGroup>
      <Divider className="mt-4">or register with</Divider>
      <SocialAuthButtons />
    </Form>
  );
};

RegistrationForm.propTypes = {
  setRedirect: PropTypes.func.isRequired,
  setRedirectUrl: PropTypes.func.isRequired,
  layout: PropTypes.string,
  hasLabel: PropTypes.bool
};

RegistrationForm.defaultProps = {
  layout: 'basic',
  hasLabel: false
};

export default withRedirect(RegistrationForm);
