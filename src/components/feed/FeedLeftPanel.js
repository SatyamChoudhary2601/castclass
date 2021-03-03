import React, { useState, useContext } from "react";
import { Card, CardBody } from "reactstrap";

import NavItemWithViewText from "../navbar/NavItemWithViewText";
import gallery from "../../assets/img/team/2.jpg";
import TopSkillPieChart from "../profile/TopSkillPieChart";
import CommonRightPanel from "../appcomponents/CommonRightPanel";
import FalconCardHeader from "../common/FalconCardHeader";
import { Link } from "react-router-dom";
import { AllDetailsContext } from "../AllDetailsContext/AllDetailsContext";

const FeedsLeftPanel = ({ items }) => {

  const { userData, setUserData } = useContext(AllDetailsContext);
  console.log(userData, "this is feed");
  const certification_count = userData?.certification?.length;
  const regret_count = userData?.regretDetails?.length;
  const recomendation_count = userData?.recomendationDetails?.length
  const usertype = userData?.usertype?.map(title => title.user_title)
  
  return (
    <>
    


      <Card className="mb-3">
        <CardBody>
          <Link to="/pages/profile">
            <img src={gallery} className="w-100 h-100" alt="" />
            <h6 className="mn-tp10">{usertype}</h6>
            <h6>Working at: LLC</h6>
            <h6>Education: project</h6>
          </Link>
        </CardBody>
      </Card>

      <Card className="mb-3">
        <FalconCardHeader title="Top Skills Rating" titleTag="h5" />
        <CardBody>
          <TopSkillPieChart
            value={80}
            right={50}
            left={55}
            textColor="#000000"
            pieColor="#A0B8DA"
          />
        </CardBody>
      </Card>

      <Card className="mb-3">
    
        <FalconCardHeader title="Profile Highlights" titleTag="h5" />
        <CardBody>
          <NavItemWithViewText
            item={{
              name: "Certification",
              path: "/Certification",
              color: "#596573",
              border: "#596573",
              count: certification_count,
              data: userData?.certification
            }}
            
          />
          <NavItemWithViewText
            item={{
              name: "Recomendations",
              path: "/Recomendations",
              color: "#596573",
              border: "#596573",
              count: recomendation_count,
              data: userData?.recomendations
            }}
          />
          <NavItemWithViewText
            item={{
              name: "Regrets",
              path: "/Regrets",
              color: "#596573",
              border: "#596573",
              count: regret_count,
              data: userData?.regretes_details
            }}
          />
        </CardBody>
      </Card>

      <CommonRightPanel items={userData} />
    </>
  );
};

export default FeedsLeftPanel;
