import React,{useEffect, useState, useContext} from "react";
import { Card, CardBody, Button,Table } from "reactstrap";
import FalconCardHeader from "../common/FalconCardHeader";
import { Link } from "react-router-dom";
import axios from 'axios'
import config from "../../helpers/config";
import {AllDetailsContext} from '../../components/AllDetailsContext/AllDetailsContext'


const PrivateCertifierListingPage = () => {

	 const [data, setData] = useState(null);
	 const {userData, setUserData} = useContext(AllDetailsContext)
	 console.log(userData,"this is user data")
  useEffect(() => {
    axios
      .get(config.API_URL() + "privatecertifier")
      .then((res) => setData(res.data.result.data));
  }, []);
  console.log(data,"PrivateCertifierListingPage")
	return(
			<Card className="mb-3">
      <FalconCardHeader title="Private Certifier Listing Page" titleTag="h5" />

	<CardBody className="fs--1">
	<Table bordered>
		<thead>
        <tr>
          <th>Certifier Name</th>
          <th>Company Info</th>
          <th>Email</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
		<tbody>
		{data?.map(certifier => (
			<tr key={certifier.id}>
				<td>{certifier.certifier_name !== null ? certifier.certifier_name : "NA"}</td>
				<td>{certifier.company_info !== null ? certifier.company_info : "NA"}</td>
				<td>{certifier.email === "" ? "NA" : certifier.email }</td>
				<td>{certifier.status === "1" ? "Active" : "Deactive"}</td>
				<td><Button>Hire</Button></td>
			</tr>
			))}
		</tbody>
		<tfoot/>
		
		
	</Table>
      
 

           </CardBody>
	
      
    </Card>
		)
}
export default PrivateCertifierListingPage;