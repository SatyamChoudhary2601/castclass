import React from 'react';
// import { Button } from 'reactstrap';
import ItemBanner from '../item/ItemBanner';
// import g from '../../assets/img/logos/g.png';
// import hp from '../../assets/img/logos/hp.png';
// import team2 from '../../assets/img/team/2.jpg';
// import generic4 from '../../assets/img/generic/4.jpg';
// import apple from '../../assets/img/logos/apple.png';
//import FalconEditor from '../common/FalconEditor';
import Dropdown from 'react-dropdown';
import { Card,CardBody,Row, Col,Table } from 'reactstrap';

const options = ['Status', 'Shortlisted', 'Pending'];
  const defaultOption = options[0];

const options1 = ['Cert/Contact', 'Dummy', 'Setting'];
  const selecectedoption1 = options1[0];

const options2 = ['Rating', '5 Star', '4 Star'];
  const selecectedoption2 = options2[0];

const options3 = ['Recom .cond', 'Dummy', 'Setting'];
  const selecectedoption3 = options3[0];

const options4 = ['Job ID', '00017', '00018'];
  const selecectedoption4 = options4[0];   
  


const Belownav = (props) => {
  
  return (
    <div class="blowwww">
      <Table>
  <thead>
    <tr>
      <th>Date</th>
      <th>Job Title/ID</th>
      <th>Certification</th>
      <th>Name</th>
      <th>Phone</th>
      <th>Status</th>
      <th>Name of Rec. Company</th>
      <th>Contact Certifier</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>03-02-2020</td>
      <td>JOB 00014</td>
      <td>Top Skill Cert.</td>
      <td>Rj Tom</td>
      <td>7865545</td>
      <td>Shortlisted</td>
      <td>Manager</td>
      <td>Contact</td>
    </tr>
     <tr>
      <td>09-02-2020</td>
      <td>JOB 00018</td>
      <td>Top Skill Cert.</td>
      <td>luise</td>
      <td>7865545</td>
      <td>Hired</td>
      <td>Manager</td>
      <td>Contacted</td>
    </tr>
     <tr>
      <td>13-02-2020</td>
      <td>JOB 00017</td>
      <td>No Cert.</td>
      <td>Jerry</td>
      <td>7865545</td>
      <td>Pending</td>
      <td>Manager</td>
      <td>Pending</td>
    </tr>
   <tr>
      <td>03-02-2020</td>
      <td>JOB 00014</td>
      <td>Top Skill Cert.</td>
      <td>Rj Tom</td>
      <td>7865545</td>
      <td>Shortlisted</td>
      <td>Manager</td>
      <td>Contact</td>
    </tr>
     <tr>
      <td>09-02-2020</td>
      <td>JOB 00018</td>
      <td>Top Skill Cert.</td>
      <td>luise</td>
      <td>7865545</td>
      <td>Hired</td>
      <td>Manager</td>
      <td>Contacted</td>
    </tr>
     <tr>
      <td>13-02-2020</td>
      <td>JOB 00017</td>
      <td>No Cert.</td>
      <td>Jerry</td>
      <td>7865545</td>
      <td>Pending</td>
      <td>Manager</td>
      <td>Pending</td>
    </tr>
  </tbody>
</Table>
    </div>
  );
}

const ProfileBanner = () => (
  <ItemBanner>
   <Card className="bbmm"> 
        
        <CardBody className="bg-light ">
        <Row>
      
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
        <Col sm="2" className="cbew">
       <Dropdown  options={options} value={defaultOption} />
        </Col>
      </Row>  
    
      
        </CardBody>
        
      </Card>
      <Belownav/>
</ItemBanner>
);

export default ProfileBanner;
