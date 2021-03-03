import React,{useState,useEffect} from 'react'
import {Card, CardBody, Row, Col, Table, Button, Input} from "reactstrap"
import './UserRole.css'


const AdminContent = () => {
	
	const [showAdmin, setShowAdmin] = useState(true)
	const onClickAdmin = () => {
		setShowAdmin(!showAdmin)
	}
	console.log(showAdmin,"showAdmin")
    return (
        
        		<Table bordered>
      
        			<thead>
      					<tr>
							<th></th>
							<th></th>
							<th></th>
							<th><Input type="text" placeholder="search for names..." className="header_input"/></th>
						</tr>
						<tr>
							<th>Name</th>
							<th>Job</th>
							<th>Email</th>
							<th>Status</th>
						</tr>

					</thead>
					<tbody>
						<tr>
							<td>Test</td>
							<td>Development</td>
							<td>example@gmail.com</td>
							<td>Active</td>
						</tr>
						<tr>
							<td>Test</td>
							<td>Development</td>
							<td>example@gmail.com</td>
							<td>Active</td>
						</tr>
						<tr>
							<td>Test</td>
							<td>Development</td>
							<td>example@gmail.com</td>
							<td>Active</td>
						</tr>
						
				</tbody>
				<tfoot/>
        		</Table>
        	
    )
}

export default AdminContent
