import React from 'react';
import {Button,Form,FormGroup,Input} from 'reactstrap';

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
  <Button color="primary" disabled>Send Message</Button>
</Form>
      
    </div>
  );
}

export default Example;