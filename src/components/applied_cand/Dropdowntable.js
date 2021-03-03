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

const options = ['Status', 'Dummy', 'Setting'];
  const defaultOption = options[0];

const options1 = ['Cert/Contact', 'Dummy', 'Setting'];
  const selecectedoption1 = options1[0];

const options2 = ['Rating', 'Dummy', 'Setting'];
  const selecectedoption2 = options2[0];

const options3 = ['Recom .cond', 'Dummy', 'Setting'];
  const selecectedoption3 = options3[0];

const options4 = ['Job ID', 'Dummy', 'Setting'];
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
          <th>Current Rec. Rating</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Status</th>
          <th>Contact Certifier</th>
          <th>Cand. Rec</th>
        </tr>
      </thead>
    <tbody>
    <tr>
      <td>03-02-2020</td>
      <td>JOB 00014</td>
      <td>Top Skill Cert.</td>
      <th>2 Rec. 1 Regret </th>
      <td>Rj Tom</td>
      <td>7865545</td>
      <td>Shortlisted</td>
      <td>Contacted</td>
      <td>Request</td>
    </tr>
     <tr>
      <td>03-02-2020</td>
      <td>JOB 00014</td>
      <td>Top Skill Cert.</td>
      <th>2 Rec. 1 Regret</th>
      <td>Rj Tom</td>
      <td>7865545</td>
      <td>Shortlisted</td>
      <td>Contacted</td>
      <td>Request</td>
    </tr>
     <tr>
      <td>03-02-2020</td>
      <td>JOB 00014</td>
      <td>Top Skill Cert.</td>
      <th>2 Rec. 1 Regret</th>
      <td>Rj Tom</td>
      <td>7865545</td>
      <td>Shortlisted</td>
      <td>Contacted</td>
      <td>Request</td>
    </tr>
    <tr>
      <td>03-02-2020</td>
      <td>JOB 00014</td>
      <td>Top Skill Cert.</td>
      <th>2 Rec. 1 Regret </th>
      <td>Rj Tom</td>
      <td>7865545</td>
      <td>Shortlisted</td>
      <td>Contacted</td>
      <td>Request</td>
    </tr>
     <tr>
      <td>03-02-2020</td>
      <td>JOB 00014</td>
      <td>Top Skill Cert.</td>
      <th>2 Rec. 1 Regret</th>
      <td>Rj Tom</td>
      <td>7865545</td>
      <td>Shortlisted</td>
      <td>Contacted</td>
      <td>Request</td>
    </tr>
     <tr>
      <td>03-02-2020</td>
      <td>JOB 00014</td>
      <td>Top Skill Cert.</td>
      <th>2 Rec. 1 Regret</th>
      <td>Rj Tom</td>
      <td>7865545</td>
      <td>Shortlisted</td>
      <td>Contacted</td>
      <td>Request</td>
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
