import React, { useState, useContext } from 'react';
import { CustomInput, Nav, Card, CardBody } from 'reactstrap';
import { navbarBreakPoint } from '../../config';
import NavItemWithRoundTextCount from '../navbar/NavItemWithRoundTextCount';
import FalconCardHeader from '../common/FalconCardHeader';
import {AllDetailsContext} from '../AllDetailsContext/AllDetailsContext'

const CommonLeftPanel = ({ items }) => {
  const [allowFollow, setAllowFollow] = useState(false);
  const [allowAvail, setAllowAvail] = useState(true);
  // const result = items.result
  const count_connection = items?.PendingConnection?.length
  const count_messages = items?.user?.messages?.length
  const count_messages_notifications = items?.user?.message
  const user_roles = items?.user_roles?.map(role => role.user_role)
const {companyData, setCompanyData} = useContext(AllDetailsContext)
const user = companyData?.userCompanies?.filter(company => company.user_id == localStorage.getItem("user_profile_id"))


  
  return (
    <span>
      <Card className="mb-3">
        <FalconCardHeader title="Network" titleTag="h5">
        </FalconCardHeader>
        <CardBody className="siquer">
          <NavItemWithRoundTextCount item={{ name: "Following", path: "/Following", type: 2, count: 0 }}></NavItemWithRoundTextCount>
          <NavItemWithRoundTextCount item={{ name: "Followers", path: "/Followers", type: 2, count: 0 }}></NavItemWithRoundTextCount>
          <NavItemWithRoundTextCount item={{ name: "Connections", path: "/Connections", type: 2, count: count_connection, data:items?.connection }}></NavItemWithRoundTextCount>
          <NavItemWithRoundTextCount item={{ name: "Z-Connections", path: "/Z-Connections", type: 2, count: 0 }}></NavItemWithRoundTextCount>
          <NavItemWithRoundTextCount item={{ name: "Groups", path: "/Groups", type: 2, count: 0 }}></NavItemWithRoundTextCount>
        </CardBody>
      </Card>


      <Card className="mb-3">
        <FalconCardHeader title="Notifications" titleTag="h5">
        </FalconCardHeader>
        <CardBody className="siquer">

          <NavItemWithRoundTextCount item={{ name: "Message", path: "/MessageNotification", type: 2, count: count_messages_notifications, data:items }}></NavItemWithRoundTextCount>
          <NavItemWithRoundTextCount item={{ name: "Connection", path: "/ConnectionNotification", type: 2, count: count_connection, data: items?.connection }}></NavItemWithRoundTextCount>
          <NavItemWithRoundTextCount item={{ name: "Z-connections", path: "/Z-ConnectionsNotification", type: 2, count: 0 }}></NavItemWithRoundTextCount>

          <h6 className="nav-txt-algn-left mn-tp20">Own Company</h6>
          <p  class="nav-txt-algn-left nav-link-text noti-text">
          {user?.map(comp => (
              
                <ul key={comp.id}>
                  <li>{comp.company_name}</li>
                </ul>
              
            ))}
            </p>
          
          <h6 className="nav-txt-algn-left mn-tp20">Role</h6>
          <p class="nav-txt-algn-left nav-link-text noti-text">{user_roles}</p>
          <h6 className="nav-txt-algn-left mn-tp20">Notification</h6>
          <NavItemWithRoundTextCount item={{ name: "Join Request", path: "/JoinNotification", type: 2, count: 0 }}></NavItemWithRoundTextCount>

          <h6 className="nav-txt-algn-left mn-tp20">Joined Company</h6>
          <p class="nav-txt-algn-left nav-link-text noti-text">Xyz Company</p>
          
          <h6 className="nav-txt-algn-left mn-tp20">Role</h6>
          <p class="nav-txt-algn-left nav-link-text noti-text">{user_roles}</p>

          <h6 className="nav-txt-algn-left mn-tp20">Notification</h6>
          <NavItemWithRoundTextCount item={{ name: "Join Request", path: "/JoinNotification", type: 2, count: 0, color: "#334051" }}></NavItemWithRoundTextCount>
          <NavItemWithRoundTextCount item={{ name: "Job Application", path: "/ApplicationNotification", type: 2, count: 0, color: "#334051" }}></NavItemWithRoundTextCount>





        </CardBody></Card>



      <Card className="mb-3">
        <FalconCardHeader title="Jobs" titleTag="h5">
        </FalconCardHeader>
        <CardBody className="siquer">



          <span aria-current="page" name="Job Alert" class="noti-text">
            <div class="d-flex align-items-left"><span class="nav-link-text">Job Alert</span></div>
          </span>
          <span class="nav-link-text dd"><CustomInput
            id="allow-follow"
            onChange={() => setAllowFollow(!allowFollow)}
            checked={allowFollow}
            type="switch"
          /></span>

          <span aria-current="page" name="Job Alert" class="noti-text" >
            <div class="d-flex align-items-left"><span class="nav-link-text">Job Availability</span></div>
          </span>
          <span class="nav-link-text dd"><CustomInput
            id="allow-Avail"
            onChange={() => setAllowAvail(!allowAvail)}
            checked={allowAvail}
            type="switch"
          /></span>
        </CardBody></Card>
    </span>
  );
};

export default CommonLeftPanel;
