import React, { useState } from 'react';
import { Button, ButtonGroup ,Table,Nav,NavItem,NavLink,Form,FormGroup,Input} from 'reactstrap';
 import { Link } from 'react-router-dom';
const Example = (props) => {
  
  return (
  <div class="topbarvv">
  <Form>
  <FormGroup>
    <Input type="text" name="name" id="exampleName" placeholder="Request" />
  </FormGroup>
  <FormGroup>
    
    <Input type="email" name="email" id="email" placeholder="Email" />
  </FormGroup>
  <FormGroup>
   <Input type="textarea" name="text" id="exampleText" placeholder="Mesaage" />
  </FormGroup>
  <Button color="primary">Send Message</Button>
</Form>
      </div>
  );
}
export default Example;