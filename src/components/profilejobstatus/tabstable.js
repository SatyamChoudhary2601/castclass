import React from 'react';
import {Table,Nav,NavItem,NavLink} from 'reactstrap';
 import { Link } from 'react-router-dom';
const Example = (props) => {
  
  return (
    <div class="btselect">
      <Nav pills>
        <NavItem>
          <NavLink tag= {Link} to="/pages/settings" >Edit Profile</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag= {Link} to="/pages/profile">View Profile</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag= {Link} to="#">Certification</NavLink>
        </NavItem>
        <NavItem>
          <NavLink  tag= {Link} to="/pages/profilelect" > Student List </NavLink>
        </NavItem>
        <NavItem>
          <NavLink  tag= {Link} to="#"> Saved Job </NavLink>
        </NavItem>
        <NavItem>
          <NavLink  tag= {Link} to="/pages/profilejobstatus" active> Job Status / Applied Job </NavLink>
        </NavItem>
      </Nav>
      <Table>
  <thead>
    <tr>
      <th>Job ID</th>
      <th>Job Title</th>
      <th>Status</th>
      <th>Employer</th>
      <th>Recommendation</th>
      <th>Regrets</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0000122567</td>
      <td>Project Manager</td>
      <td>Hired</td>
      <td></td>
      <td>View</td>
      <td>View</td>
    </tr>
    <tr>
      <td>0000122567</td>
      <td>Project Manager</td>
      <td>Hired</td>
      <td></td>
      <td>View</td>
      <td>View</td>
    </tr>
    <tr>
      <td>0000122567</td>
      <td>Project Manager</td>
      <td>Hired</td>
      <td></td>
      <td>View</td>
      <td>View</td>
    </tr>
  </tbody>
</Table>

      
    </div>
  );
}

export default Example;