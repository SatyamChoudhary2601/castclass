import React, { Fragment, useState, useEffect, useContext } from 'react';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';

import { Card, CardBody, Row, Col } from 'reactstrap';
import FalconCardHeader from '../common/FalconCardHeader';
import EditableContent from './EditableContent';
import ProfileIntro from './ProfileIntro';
import {AllDetailsContext} from '../AllDetailsContext/AllDetailsContext'
import { Rating } from 'primereact/rating';


const GetHeader = ({ tableData }) => {
  let keys = Object.keys(tableData[0]);
  return keys.map((key, index) => {
    return <th key={key}>{key.toUpperCase()}</th>
  });
}
const RenderRow = (props) => {
  return props.keys.map((key, index) => {
    return <td key={props.data[key]}>{props.data[key]}</td>
  })
}

const GetRowsData = ({ tableData }) => {
  var items = tableData;
  var keys = Object.keys(tableData[0]);
  return items.map((row, index) => {
    return <tr key={index}><RenderRow key={index} data={row} keys={keys} /></tr>
  });
}
const GetTableData = ({ tableData }) => (<table>
  <thead>
    <tr><GetHeader tableData={tableData} /></tr>
  </thead>
  <tbody>
    <GetRowsData tableData={tableData} />
  </tbody>
</table>);

const GetFooter = ({ profileInfo, type }) => {
  const [certificationData, setCertificationData] = useState(null)
  const [val, setVal] = useState(null);
  const [val2, setVal2] = useState(null);

  const {userData, setUserData} = useContext(AllDetailsContext)
  useEffect(() => {
    setCertificationData(userData?.certification)
  console.log(certificationData, "this is activity")

  },[certificationData])


let data9 = certificationData?.map(cert => ({'Certification':cert.user_certification,'Start Year':cert.user_cert_start_year, 'End Year':cert.user_cert_end_year}))
console.log(data9,"this is certdata")
console.log(certificationData,"this is cert_data")

let Request = val ? "Certified" : null;
let Request_val =  val2 ? "Certified" : null;
  
  let data3 = [
    { 'Name': 'Abc', 'Institute': 'MIT', 'Top Skills': 'Management', 'Rating':<Rating stars={3} value={val} cancel={false} onChange={(e) => setVal(e.value)} />,Request,'Status':'Rejected' },
    { 'Name': 'sas', 'Institute': 'VIT', 'Top Skills': 'Mohali', 'Rating':<Rating stars={3} value={val2} cancel={false} onChange={(e) => setVal2(e.value)} />,Request_val,'Status':'Accepted' },
    
    
  ];
  let data2 = [
    { 'Certification': "jj", 'Weeks': 'll', 'Location': 'Bangalore' },
    { 'Certification': 'Def', 'Weeks': 43, 'Location': 'Mumbai' },
    { 'Certification': 'Uff', 'Weeks': 30, 'Location': 'Chennai' },
    { 'Certification': 'Ammse', 'Weeks': 87, 'Location': 'Delhi' },
    { 'NaCertification': 'Yysse', 'Weeks': 28, 'Location': 'Hyderabad' }
  ];
  let data4 = [
    { 'Company': 'Abc', 'Date': "15/8/2020", 'Location': 'Bangalore' },
    { 'Company': 'Def', 'Date': "15/8/2020", 'Location': 'Mumbai' },
    { 'Company': 'Uff', 'Date': "15/8/2020", 'Location': 'Chennai' },
    { 'Company': 'Ammse', 'Date': "15/8/2020", 'Location': 'Delhi' },
    { 'Company': 'Yysse', 'Date': "15/8/2020", 'Location': 'Hyderabad' }
  ];
  let data5 = [
    { 'Company': 'Abc', 'Date': "15/8/2020", 'Location': 'Bangalore', Status:"Applied"},
    { 'Company': 'Def', 'Date': "15/8/2020", 'Location': 'Mumbai' ,Status:"Applied"},
    { 'Company': 'Uff', 'Date': "15/8/2020", 'Location': 'Chennai,Status:"Applied"' },
    { 'Company': 'Ammse', 'Date': "15/8/2020", 'Location': 'Delhi',Status:"Pending" },
    { 'Company': 'Yysse', 'Date': "15/8/2020", 'Location': 'Hyderabad',Status:"Applied" }
  ];

  switch (type) {
    case 0:
      return (<EditableContent profileInfo={profileInfo} />);
    case 1:
      return (<ProfileIntro profileInfo={profileInfo} />);
    case 2:
      return (<GetTableData type={type} tableData={data9} />);
    case 3:
      return (<GetTableData type={type} tableData={data3} />);
    case 4:
      return (<GetTableData type={type} tableData={data4} />);
    case 5:
      return (<GetTableData type={type} tableData={data5} />);
  }
};

const ActivityContent = ({ profileInfo }) => {

  const [selectedButton, setselectedButton] = useState(0);
  const {userData, setUserData} = useContext(AllDetailsContext)
  console.log(userData?.user?.lecturer_status,"this is userData by activity")
  const lecturer_status = userData?.user?.lecturer_status


  useEffect(() => {
    console.log("selectedButton=" + selectedButton);
  }, []);

  let buttonsTitleArray = ["Edit Profile", "Profile", "Certification", "Student List", "Saved Jobs", "Jobs Status / Applied Jobs"];

  return (
    <Card className="mb-3">
      <FalconCardHeader clas title={buttonsTitleArray[selectedButton]}>
      </FalconCardHeader>
      <CardBody className="fs--1 p-0">
        <div className="mn-tp20 mn-bt20 btns-cont">

          <span className={selectedButton == 0 ? "btn-select" : "btn-unselect"} onClick={() => setselectedButton(0)}>Edit Profile</span>
          <span className={selectedButton == 1 ? "btn-select" : "btn-unselect"} onClick={() => setselectedButton(1)}>View Profile</span>
          
                                 <span className={selectedButton == 2 ? "btn-select" : "btn-unselect"} onClick={() => setselectedButton(2)}>Certification</span>
                                 
                                 <span className={selectedButton == 3 ? "btn-select" : "btn-unselect"} onClick={() => setselectedButton(3)}> Student List </span>
          
          <span className={selectedButton == 4 ? "btn-select" : "btn-unselect"} onClick={() => setselectedButton(4)}> Saved Job </span>
          <span className={selectedButton == 5 ? "btn-select" : "btn-unselect"} onClick={() => setselectedButton(5)}> Jobs Status / Applied Jobs </span>
        </div>
      
        <GetFooter type={selectedButton} profileInfo={profileInfo} />
      </CardBody>
    </Card>
  );
};

export default ActivityContent;
