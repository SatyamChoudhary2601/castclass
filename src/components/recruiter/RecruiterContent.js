import React, { Fragment, useState, useEffect } from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
import FalconCardHeader from "../common/FalconCardHeader";
import EditableContent from "../profile/EditableContent";
import ProfileIntro from "./ProfileIntro";
import RecruiterList from "./RecruiterList";
import AboutUs from "./AboutUs";
import Feed from "./Feed";
import CompanyProfile from "./CompanyProfile";
import People from "../page/People";
import UserRole from "./item/UserRole";
import CandidateFeedback from './CandidateFeedback';
import Discussion from './Discussion';
import Contact from './Contact';
import ProfileSummary from './ProfileSummary';
import CompanyProduct from './CompanyProduct';
import JobList from './JobList';
import AppliedCandidate from './AppliedCandidate';
import HiredCandidate from './HiredCandidate'
import Post from './Post'
import Editor from './Editor'
import PrivateCertifier from './PrivateCertifier'





const GetHeader = ({ tableData }) => {
  let keys = Object.keys(tableData[0]);
  return keys.map((key, index) => {
    return <th key={key}>{key.toUpperCase()}</th>;
  });
};
const RenderRow = (props) => {
  return props.keys.map((key, index) => {
    return <td key={props.data[key]}>{props.data[key]}</td>;
  });
};

const GetRowsData = ({ tableData }) => {
  var items = tableData;
  var keys = Object.keys(tableData[0]);
  return items.map((row, index) => {
    return (
      <tr key={index}>
        <RenderRow key={index} data={row} keys={keys} />
      </tr>
    );
  });
};
const GetTableData = ({ tableData }) => (
  <Card>
    <table>
      <thead>
        <tr>
          <GetHeader tableData={tableData} />
        </tr>
      </thead>
      <tbody>
        <GetRowsData tableData={tableData} />
      </tbody>
    </table>
  </Card>
);

const GetFooter = ({ profileInfo, type, data }) => {
  console.log(data,"get footer")
  let data3 = [
    { Name: "Abc", Age: 15, Location: "Bangalore" },
    { Name: "Def", Age: 43, Location: "Mumbai" },
    { Name: "Uff", Age: 30, Location: "Chennai" },
    { Name: "Ammse", Age: 87, Location: "Delhi" },
    { Name: "Yysse", Age: 28, Location: "Hyderabad" },
  ];
  let data2 = [
    {
     status: "No Data"
    }
  ];
  let data4 = [
    { Company: "Abc", Date: "15/8/2020", Location: "Bangalore" },
    { Company: "Def", Date: "15/8/2020", Location: "Mumbai" },
    { Company: "Uff", Date: "15/8/2020", Location: "Chennai" },
    { Company: "Ammse", Date: "15/8/2020", Location: "Delhi" },
    { Company: "Yysse", Date: "15/8/2020", Location: "Hyderabad" },
  ];
  let data5 = [
    {
      Company: "Abc",
      Date: "15/8/2020",
      Location: "Bangalore",
      Status: "Applied",
    },
    {
      Company: "Def",
      Date: "15/8/2020",
      Location: "Mumbai",
      Status: "Applied",
    },
    { Company: "Uff", Date: "15/8/2020", Location: 'Chennai,Status:"Applied"' },
    {
      Company: "Ammse",
      Date: "15/8/2020",
      Location: "Delhi",
      Status: "Pending",
    },
    {
      Company: "Yysse",
      Date: "15/8/2020",
      Location: "Hyderabad",
      Status: "Applied",
    },
  ];

if(localStorage.getItem('user_id') == data.map(val => val.user_id)){
  console.log("this is everything")
  switch (type) {
    case 0:
      return <AboutUs type={type} data={data.map(val => val.company_aboutus)} />;
    case 1:
      return <CompanyProfile title={"Company Profile"} data={data.map(val => val.company_profile)}/>;
    case 2:
      return <RecruiterList />;
    case 3:
      return (
        <GetTableData type={type} tableData={data2} />
      );
    case 4:
      return <GetTableData type={type} tableData={data2} />;
    case 5:
      return <AppliedCandidate title={"Applied Candidate"} />;
    case 6:
      return <JobList title={"Job List"} />;
    case 7:
      return <ProfileIntro title={"Contact Us"} data={data.map(val => val.company_contactus)}/>;
    case 8:
      return <People />;
    case 9:
      return <Discussion />;
    case 10:
      return <PrivateCertifier title={"Private Certifier"}/>;
    case 11:
      return <Post title={"Post"} />;
    case 12:
      return <CompanyProduct title={"Company Product"}  />;
    case 13:
      return <Editor title={"Editor"}/>;
  }
}else{
  console.log("this is nothing")
  switch (type) {
    case 0:
      return <AboutUs type={type} data={data.map(val => val.company_aboutus)} />;
    case 1:
      return <CompanyProfile title={"Company Profile"} data={data.map(val => val.company_profile)}/>;
    case 2:
      return <CandidateFeedback title={"Candidate Feedback"}/>;
    case 3:
      return (
        <Discussion title={"Discussion"} />
      );
    case 4:
      return <Contact title={"Contact Us "} data={data.map(val => val.company_contactus)}/>;
    case 5:
      return <People />;
    case 6:
      return <ProfileSummary title={"Profile Summary"} data={data}/>;
    case 7:
      return <CompanyProduct title={"Company Product"} />;
    case 8:
      return <Post title={"Posts"} />;
    case 9:
      return <HiredCandidate title={"Hired Candidate"}/>;
    case 10:
      return <AppliedCandidate title={"Applied Candidate"}/>;
    case 11:
      return <JobList title={"Job List"} />;
  }
}
  
};

const RecruiterContent = ({ profileInfo, id, data }) => {
  

  const [selectedButton, setselectedButton] = useState(0);

  useEffect(() => {
    console.log("selectedButton=" + selectedButton);
  }, []);



  let buttonsTitleArrayOwn = [
    "About Us",
    "Company Profile",
    "Recruiters List",
    "Candidate List",
    "Certified Candidate",
    "Applied Candidate",
    "Jobs List",
    "Contact Us",
    "Follow",
    "Discussions",
    "Private Certifier",
    "Posts",
    "Company Products",
    "Editor"
    
  ];
  let buttonsTitleArrayOther = [
    "About Us",
    "Company Profile",
    "Candidate Feedback",
    "Discussions",
    "Contact Us",
    "Follow",
    "Profile Summary",
    "Company Products",
    "Posts",
    "Hired Candidate",
    "Applied Candidate",
    "Jobs List"
    
  ];

  
  const buttonsTitleArray =localStorage.getItem('user_id') == data?.data.user_id ? buttonsTitleArrayOwn : buttonsTitleArrayOther 

  console.log(buttonsTitleArray)
if(buttonsTitleArray.length === 14){
  console.log("hellooooooooooooooooooooooooooo")
}else{
  console.log("byeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")

}
  return (
    <Fragment>
      {id === "recruiter" ? (
        <UserRole />
      ) : buttonsTitleArray.length === 14 ? (
        <>
          <div className="mn-tp20 mn-bt20 btns-cont">
            <span
              className={
                ("large", selectedButton == 0 ? "btn-select" : "btn-unselect")
              }
              onClick={() => setselectedButton(0)}
            >
              {buttonsTitleArray[0]}
            </span>
            <span
              className={selectedButton == 1 ? "btn-select" : "btn-unselect"}
              onClick={() => setselectedButton(1)}
            >
              {buttonsTitleArray[1]}
            </span>
            <span
              className={selectedButton == 2 ? "btn-select" : "btn-unselect"}
              onClick={() => setselectedButton(2)}
            >
              {buttonsTitleArray[2]}
            </span>
            <span
              className={selectedButton == 3 ? "btn-select" : "btn-unselect"}
              onClick={() => setselectedButton(3)}
            >
              {" "}
              {buttonsTitleArray[3]}{" "}
            </span>
            <span
              className={selectedButton == 4 ? "btn-select" : "btn-unselect"}
              onClick={() => setselectedButton(4)}
            >
              {" "}
              {buttonsTitleArray[4]}{" "}
            </span>
            <span
              className={selectedButton == 5 ? "btn-select" : "btn-unselect"}
              onClick={() => setselectedButton(5)}
            >
              {" "}
              {buttonsTitleArray[5]}{" "}
            </span>
            <span
              className={selectedButton == 6 ? "btn-select" : "btn-unselect"}
              onClick={() => setselectedButton(6)}
            >
              {" "}
              {buttonsTitleArray[6]}{" "}
            </span>
            <span
              className={selectedButton == 7 ? "btn-select" : "btn-unselect"}
              onClick={() => setselectedButton(7)}
            >
              {" "}
              {buttonsTitleArray[7]}{" "}
            </span>
            <span
              className={selectedButton == 8 ? "btn-select" : "btn-unselect"}
              onClick={() => setselectedButton(8)}
            >
              {" "}
              {buttonsTitleArray[8]}{" "}
            </span>
            <span
              className={selectedButton == 9 ? "btn-select" : "btn-unselect"}
              onClick={() => setselectedButton(9)}
            >
              {" "}
              {buttonsTitleArray[9]}{" "}
            </span>
            
            <span
              className={selectedButton == 10 ? "btn-select" : "btn-unselect"}
              onClick={() => setselectedButton(10)}
            >
              {" "}
              {buttonsTitleArray[10]}{" "}
            </span>
            <span
              className={selectedButton == 11 ? "btn-select" : "btn-unselect"}
              onClick={() => setselectedButton(11)}
            >
              {" "}
              {buttonsTitleArray[11]}{" "}
            </span>
            <span
              className={selectedButton == 12 ? "btn-select" : "btn-unselect"}
              onClick={() => setselectedButton(12)}
            >
              {" "}
              {buttonsTitleArray[12]}{" "}
            </span>
            <span
              className={selectedButton == 13 ? "btn-select" : "btn-unselect"}
              onClick={() => setselectedButton(13)}
            >
              {" "}
              {buttonsTitleArray[13]}{" "}
            </span>
          </div>

          <GetFooter
            type={selectedButton}
            profileInfo={profileInfo}
            data={[data?.data]}
          />
        </>
      )
      : 
    (
        <>
          <div className="mn-tp20 mn-bt20 btns-cont">
            <span
              className={
                ("large", selectedButton == 0 ? "btn-select" : "btn-unselect")
              }
              onClick={() => setselectedButton(0)}
            >
              {buttonsTitleArray[0]}
            </span>
            <span
              className={selectedButton == 1 ? "btn-select" : "btn-unselect"}
              onClick={() => setselectedButton(1)}
            >
              {buttonsTitleArray[1]}
            </span>
            <span
              className={selectedButton == 2 ? "btn-select" : "btn-unselect"}
              onClick={() => setselectedButton(2)}
            >
              {buttonsTitleArray[2]}
            </span>
            <span
              className={selectedButton == 3 ? "btn-select" : "btn-unselect"}
              onClick={() => setselectedButton(3)}
            >
              {" "}
              {buttonsTitleArray[3]}{" "}
            </span>
            <span
              className={selectedButton == 4 ? "btn-select" : "btn-unselect"}
              onClick={() => setselectedButton(4)}
            >
              {" "}
              {buttonsTitleArray[4]}{" "}
            </span>
            <span
              className={selectedButton == 5 ? "btn-select" : "btn-unselect"}
              onClick={() => setselectedButton(5)}
            >
              {" "}
              {buttonsTitleArray[5]}{" "}
            </span>
            <span
              className={selectedButton == 6 ? "btn-select" : "btn-unselect"}
              onClick={() => setselectedButton(6)}
            >
              {" "}
              {buttonsTitleArray[6]}{" "}
            </span>
            <span
              className={selectedButton == 7 ? "btn-select" : "btn-unselect"}
              onClick={() => setselectedButton(7)}
            >
              {" "}
              {buttonsTitleArray[7]}{" "}
            </span>
            <span
              className={selectedButton == 8 ? "btn-select" : "btn-unselect"}
              onClick={() => setselectedButton(8)}
            >
              {" "}
              {buttonsTitleArray[8]}{" "}
            </span>
            <span
              className={selectedButton == 9 ? "btn-select" : "btn-unselect"}
              onClick={() => setselectedButton(9)}
            >
              {" "}
              {buttonsTitleArray[9]}{" "}
            </span>
            
            <span
              className={selectedButton == 10 ? "btn-select" : "btn-unselect"}
              onClick={() => setselectedButton(10)}
            >
              {" "}
              {buttonsTitleArray[10]}{" "}
            </span>
            <span
              className={selectedButton == 11 ? "btn-select" : "btn-unselect"}
              onClick={() => setselectedButton(11)}
            >
              {" "}
              {buttonsTitleArray[11]}{" "}
            </span>
          </div>

          <GetFooter
            type={selectedButton}
            profileInfo={profileInfo}
            data={[data?.data]}
          />
        </>
      )
    }
    </Fragment>
  );
};

export default RecruiterContent;
