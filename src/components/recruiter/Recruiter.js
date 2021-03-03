import React, { useState, useEffect, useContext } from "react";
import ContentWithAsideLayout from "../../layouts/ContentWithAsideLayout";
import { Link } from "react-router-dom";
import RecruiterBanner from "./RecruiterBanner";
import ProfileAside from "./ProfileAside";
import ProfileContent from "./AboutUs";
import ProfileFooter from "./ProfileFooter";
import ContentWithLeftSideLayout from "../../layouts/ContentWithLeftSideLayout";
import RecruiterLefttPanel from "./RecruiterLeftPanel";
import RecruiterContent from "./RecruiterContent";
import Dropdown from "react-dropdown";
import useGetFetch from "../../hooks/useGetFetch";

import CompanyRecruiterListing from "../appcomponents/CompanyRecruiterListing";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";
import { AllDetailsContext } from "../AllDetailsContext/AllDetailsContext";
const options = ["Manage", "Dummy", "Setting"];
const defaultOption = options[0];

const Topnav = ({ selectedButton, setselectedButton, id }) => {
  const { userData, setUserData } = useContext(AllDetailsContext);
  console.log(userData, "this is home");
  const history = useHistory();
  const [isId, setIsId] = useState(false);
  // const [data, setDataa] = useState(null)
  // const [api, setApi] = useState(
  //   "/company/list?limit=" +
  //     0 +
  //     "&offset=0&recruitement_company=" +
  //     0 +
  //     "&default_user=" +
  //     localStorage.getItem("default_user")
  // );
  // useEffect(()=>{
  //   setData(useGetFetch(api))
  // },[])
  // const data = useGetFetch(api).data?.result;
  // const dataValue = data.result.data.map((list) => list.id);
  // const list = data ? data.data.map((list) => list) : "";
  // console.log(data, "listItems----------------");
  // console.log(list, "id----------------");
  // const { id } = useParams();
  const onClickHandler = () => {
    setIsId(true);
    console.log(id, "here is the id");
    history.push(`/page/recruiter/userroles/${id}`);
  };

  return (
    <div class="rmbr">
      <div class="topbar">
        <div className="btns-cont">
          <span
            className={
              ("large", selectedButton == 0 ? "btn-select" : "btn-unselect")
            }
            onClick={() => setselectedButton(0)}
          >
            Admin View
          </span>
          <span
            className={selectedButton == 1 ? "btn-select" : "btn-unselect"}
            onClick={() => setselectedButton(1)}
          >
            Editor
          </span>
          <span
            className={selectedButton == 2 ? "btn-select" : "btn-unselect"}
            onClick={() => setselectedButton(2)}
          >
            Recruiter
          </span>
          <span
            className={selectedButton == 3 ? "btn-select" : "btn-unselect"}
            onClick={() => setselectedButton(3)}
          >
            Advertiser{" "}
          </span>
          <span
            className={selectedButton == 4 ? "btn-select" : "btn-unselect"}
            onClick={() => setselectedButton(4)}
          >
            Private Certifier
          </span>
          {/* <Link to={`/pages/userroles/${id}`}> */}

          {!isId && (
            <img
              src="http://cdn.onlinewebfonts.com/svg/img_120429.png"
              width="30px"
              style={{ marginLeft: "20px", cursor: "pointer" }}
              onClick={onClickHandler}
            />
          )}
          {/* </Link> */}
          <div className="dropme">
            <Dropdown options={options} value={defaultOption} />
          </div>
        </div>
      </div>
      <RecruiterBanner />
    </div>
  );
};

const Recruiter = (props) => {
  const { id } = useParams();
  console.log(props.location.state, "-------=----==-");


  const [selectedButton, setselectedButton] = useState(0);
  useEffect(() => {
    console.log(selectedButton);
  });

  return (
    <ContentWithLeftSideLayout
      banner={
        <Topnav
          selectedButton={selectedButton}
          setselectedButton={setselectedButton}
          id={id}
        />
      }
      leftSide={<RecruiterLefttPanel />}
      isStickyAside={false}
    >
      <RecruiterContent id={id} data={props.location.state}/>
    </ContentWithLeftSideLayout>
  );
};

export default Recruiter;
