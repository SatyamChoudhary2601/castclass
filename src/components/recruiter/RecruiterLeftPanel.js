import React, { useState, useContext, useEffect } from "react";
import { CustomInput, Nav, Card, CardBody } from "reactstrap";
import { navbarBreakPoint } from "../../config";
import NavItemWithRoundTextCount from "../navbar/NavItemWithRoundTextCount";
import FalconCardHeader from "../common/FalconCardHeader";
import gallery from "../../assets/img/icons/icon2.png";

const RecruiterLefttPanel = ({ items }) => {

  
  const [allowFollow, setAllowFollow] = useState(false);
  const [allowAvail, setAllowAvail] = useState(true);
  return (
    <span>
      <Card className="mb-3">
        <CardBody>
          {/* <Link to="/pages/profile"> */}
          <img src={gallery} className="w-100 h-100" alt="" />
          <h6 className="mn-tp10">Company Information</h6>
          <h6>Industry: Information Technology</h6>
          <h6>Location: Mohali</h6>
          {/* </Link> */}
        </CardBody>
      </Card>

      <Card className="mb-3">
        <FalconCardHeader title="Network" titleTag="h5" />
        <CardBody className="siquer">
          <NavItemWithRoundTextCount
            item={{ name: "Following", path: "/Following", type: 2, count: 0 }}
          />
          <NavItemWithRoundTextCount
            item={{ name: "Followers", path: "/Followers", type: 2, count: 0 }}
          />
          <NavItemWithRoundTextCount
            item={{
              name: "Connections",
              path: "/Connections",
              type: 2,
              count: 0,
            }}
          />
          <NavItemWithRoundTextCount
            item={{
              name: "Z-Connections",
              path: "/Z-Connections",
              type: 2,
              count: 0,
            }}
          />
          <NavItemWithRoundTextCount
            item={{ name: "Groups", path: "/Groups", type: 2, count: 0 }}
          />
        </CardBody>
      </Card>

      <Card className="mb-3">
        <FalconCardHeader title="Notifications" titleTag="h5" />
        <CardBody className="siquer">
          <NavItemWithRoundTextCount
            item={{
              name: "Message",
              path: "/MessageNotification",
              type: 2,
              count: 0,
            }}
          />
          <NavItemWithRoundTextCount
            item={{
              name: "Connection",
              path: "/ConnectionNotification",
              type: 2,
              count: 0,
            }}
          />
          <NavItemWithRoundTextCount
            item={{
              name: "Z-Connections",
              path: "/Z-ConnectionsNotification",
              type: 2,
              count: 0,
            }}
          />
        </CardBody>
      </Card>

      {/* <Card className="mb-3">
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
 */}
    </span>
  );
};

export default RecruiterLefttPanel;
