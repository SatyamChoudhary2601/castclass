import React from 'react';
import { NavLink } from 'reactstrap';
import ItemBanner from '../item/ItemBanner';
// import g from '../../assets/img/logos/g.png';
// import hp from '../../assets/img/logos/hp.png';
// import team2 from '../../assets/img/team/2.jpg';
// import generic4 from '../../assets/img/generic/4.jpg';
// import apple from '../../assets/img/logos/apple.png';
//import FalconEditor from '../common/FalconEditor';
import Dropdown from 'react-dropdown';
import { Link } from 'react-router-dom';
import { Card,CardBody,Row, Col,Table } from 'reactstrap';

const options = ['Skill Search', 'Php', 'Dot.Net'];
  const defaultOption = options[0];

const options1 = ['Certification Rating', '5 Star', '4 Star'];
  const selecectedoption1 = options1[0];

const options2 = ['Lacation', 'Mumbai', 'Delhi'];
  const selecectedoption2 = options2[0];

const options3 = ['Year of Experience', '15 Year', '16 Year'];
  const selecectedoption3 = options3[0];



const Belownav = (props) => {
  
  return (
    <div class="blowwww">
      <Table>
   <thead>
    <tr>
      <th>Top Rated Skills</th>
      <th>Name</th>
      <th>Skills</th>
      <th>Profession</th>
      <th>Year of Experience</th>
      <th>Location</th>
     </tr>
  </thead>
  <tbody>
    <tr>
      <td> <NavLink tag= {Link} to="#">5 Star</NavLink></td>
      <td>Tom</td>
      <td>Php Dot Net.</td>
      <td>Project Management</td>
      <td>15 Year</td>
      <td>Stockholm</td>
    </tr>
     <tr>
      <td><NavLink tag= {Link} to="#">4 Star</NavLink></td>
      <td>Rahul</td>
      <td>Html css Seo</td>
      <td>Project Management</td>
      <td>10 Year</td>
      <td>Mumbai</td>
    </tr>
     <tr>
      <td><NavLink tag= {Link} to="#">5 Star</NavLink></td>
      <td>Herry</td>
      <td>Java Angualer</td>
      <td>IT Developer</td>
      <td>16 Year</td>
      <td>Delhi</td>
    </tr>
    <tr>
      <td><NavLink tag= {Link} to="#">2 Star</NavLink></td>
      <td>Tom</td>
      <td>Php Dot Net.</td>
      <td>Project Management</td>
      <td>15 Year</td>
      <td>Stockholm</td>
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
        <Col sm="3" className="cbew">
       <Dropdown  options={options1} value={selecectedoption1} />
        </Col>
        <Col sm="2" className="cbew">
       <Dropdown  options={options2} value={selecectedoption2} />
        </Col>
        <Col sm="3" className="cbew">
       <Dropdown  options={options3} value={selecectedoption3} />
        </Col>
        
      </Row>    
    
      
        </CardBody>
        
      </Card>

   <Belownav />
    
  </ItemBanner>
);

export default ProfileBanner;
