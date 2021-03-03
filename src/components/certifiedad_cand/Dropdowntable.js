import React from 'react';
//import { NavLink } from 'reactstrap';
import ItemBanner from '../item/ItemBanner';
// import g from '../../assets/img/logos/g.png';
// import hp from '../../assets/img/logos/hp.png';
// import team2 from '../../assets/img/team/2.jpg';
// import generic4 from '../../assets/img/generic/4.jpg';
// import apple from '../../assets/img/logos/apple.png';
//import FalconEditor from '../common/FalconEditor';
import Dropdown from 'react-dropdown';
//import { Link } from 'react-router-dom';
import { Card,CardBody,Row, Col,Table } from 'reactstrap';

const options = ['Skill Search', 'Php', 'Dot.Net'];
  const defaultOption = options[0];

const options1 = ['Cert. Rating', '5 Star', '4 Star'];
  const selecectedoption1 = options1[0];

const options2 = ['Lacation', 'Mumbai', 'Delhi'];
  const selecectedoption2 = options2[0];

const options3 = ['Year of Exp.', '15 Year', '16 Year'];
  const selecectedoption3 = options3[0];

const options4 = ['Cert. Request', 'Request', 'Recommend'];
  const selecectedoption4 = options4[0];

const Belownav = (props) => {
  
  return (
    <div class="blowwww">
      <Table>
   <thead>
    <tr>
      <th>Date</th>
      <th>Certification</th>
      <th>Name</th>
      <th>Top Skills</th>
      <th>Certification Status</th>
       <th>Assign Certified</th>
      <th>Job Status</th>
      <th>Current Emp</th>
      <th>Recom</th>
      <th>Recom Request</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>03-02-2020</td>
      <td>5 Star</td>  
      <td>Tom</td>
      <td>Php Dot Net</td>
      <td>Accepted</td>
      <td>Editor</td>
      <td>Hired</td>
      <td>14 Year</td>
      <td>Regrate</td>
      <td>Request</td>
    </tr>
     <tr>
      <td>03-02-2020</td>
      <td>3 Star</td>  
      <td>Hery</td>
      <td>Dot Net</td>
      <td>Accepted</td>
      <td>Editor</td>
      <td>Hired</td>
      <td>11 Year</td>
      <td>Regrate</td>
      <td>Request</td>
    </tr>
     <tr>
      <td>03-02-2020</td>
      <td>4 Star</td>  
      <td>kaly</td>
      <td>project</td>
      <td>Accepted</td>
      <td>Editor</td>
      <td>Hired</td>
      <td>5 Year</td>
      <td>Recom</td>
      <td>Request</td>
    </tr>
    <tr>
      <td>03-02-2020</td>
      <td>3 Star</td>  
      <td>Hery</td>
      <td>Dot Net</td>
      <td>Accepted</td>
      <td>Editor</td>
      <td>Hired</td>
      <td>11 Year</td>
      <td>Regrate</td>
      <td>Request</td>
    </tr>
     <tr>
      <td>03-02-2020</td>
      <td>4 Star</td>  
      <td>kaly</td>
      <td>project</td>
      <td>Accepted</td>
      <td>Editor</td>
      <td>Hired</td>
      <td>5 Year</td>
      <td>Recom</td>
      <td>Request</td>
    </tr>
  
  </tbody>
</Table>
    </div>
  );
}

const ProfileBanner = () => (
  <ItemBanner>
   <Card className="bbmm "> 
        
        <CardBody className="bg-light ">
         <Row>
      
       <Col sm="2" className="cbew">
       <Dropdown  options={options} value={defaultOption} />
        </Col>
        <Col sm="2" className="cbew">
       <Dropdown  options={options1} value={selecectedoption1} />
        </Col>
        <Col sm="2" className="cbew">
       <Dropdown  options={options2} value={selecectedoption2} />
        </Col>
        <Col sm="2" className="cbew">
       <Dropdown  options={options3} value={selecectedoption3} />
        </Col>
        <Col sm="2" className="cbew">
       <Dropdown  options={options4} value={selecectedoption4} />
        </Col>
      </Row>    
    
      
        </CardBody>
        
      </Card>

   <Belownav />
    
  </ItemBanner>
);

export default ProfileBanner;
