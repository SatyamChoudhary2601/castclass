import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Button,
  Collapse,
  CustomInput,
  Nav,
  Navbar,
  NavLink,
} from "reactstrap";
import Scrollbar from "react-scrollbars-custom";
import Logo from "./Logo";
import NavbarVerticalMenu from "./NavbarVerticalMenu";
import ToggleButton from "./ToggleButton";
import AppContext from "../../context/Context";
import Flex from "../common/Flex";
import routes from "../../routes";
import { navbarBreakPoint } from "../../config";
import Dropdown from "react-dropdown";
import NavItemWithViewText from "./NavItemWithViewText";
import NavItemWithRoundTextCount from "./NavItemWithRoundTextCount";

import { Link } from "react-router-dom";
import gallery from "../../assets/img/team/2.jpg";
import FalconEditor from "../../components/recruiter/Tabstable";
import ReactEchartsCore from "echarts-for-react/lib/core";
import echarts from "echarts/lib/echarts";
import { getGrays, getPosition, numberFormatter } from "../../helpers/utils";
import TopSkillPieChart from "../profile/TopSkillPieChart";

const options = ["Yes", "No"];
const defaultOption = options[0];

const options1 = ["Accept", "Reject"];
const defaultOption1 = options1[0];

const NavbarVertical = () => {
  const navBarRef = useRef(null);
  const [allowFollow, setAllowFollow] = useState(false);
  const [allowAvail, setAllowAvail] = useState(true);

  const {
    //isFluid,
    //setIsFluid,
    isRTL,
    //setIsRTL,
    //isDark,
    //setIsDark,
    showBurgerMenu,
    isNavbarVerticalCollapsed,
    setIsNavbarVerticalCollapsed,
  } = useContext(AppContext);

  const HTMLClassList = document.getElementsByTagName("html")[0].classList;
  //Control Component did mount and unmount of hover effect
  if (isNavbarVerticalCollapsed) {
    HTMLClassList.add("navbar-vertical-collapsed");
  }

  useEffect(() => {
    return () => {
      HTMLClassList.remove("navbar-vertical-collapsed-hover");
    };
  }, [isNavbarVerticalCollapsed, HTMLClassList]);

  //Control mouseEnter event
  let time = null;
  const handleMouseEnter = () => {
    if (isNavbarVerticalCollapsed) {
      time = setTimeout(() => {
        HTMLClassList.add("navbar-vertical-collapsed-hover");
      }, 100);
    }
  };

  return (
    <Navbar
      expand={navbarBreakPoint}
      className="navbar-vertical navbar-glass"
      light
    >
      <Flex align="center">
        <ToggleButton
          isNavbarVerticalCollapsed={isNavbarVerticalCollapsed}
          setIsNavbarVerticalCollapsed={setIsNavbarVerticalCollapsed}
        />
        <Logo at="navbar-vertical" width={40} />
      </Flex>

      <Collapse
        navbar
        isOpen={showBurgerMenu}
        className="bg-200"
        innerRef={navBarRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => {
          clearTimeout(time);
          HTMLClassList.remove("navbar-vertical-collapsed-hover");
        }}
      >
        <Scrollbar
          style={{ height: "calc(100vh - 77px)", display: "block" }}
          rtl={isRTL}
          trackYProps={{
            renderer(props) {
              const { elementRef, ...restProps } = props;
              return (
                <span {...restProps} ref={elementRef} className="TrackY" />
              );
            },
          }}
        >
          <Nav navbar vertical className="imgcenter" style={{ padding: 0 }}>
            {/* <NavbarVerticalMenu routes={routes} /> */}

            {window.location.pathname === "/pages/com_profile" ||
            window.location.pathname === "/pages/recruiter" ||
            window.location.pathname === "/pages/certified_cand" ||
            window.location.pathname === "/pages/applied_cand" ||
            window.location.pathname === "/pages/appliedad_cand" ||
            window.location.pathname === "/pages/certifiedad_cand" ? (
              ""
            ) : (
              <Link to="/pages/profile">
                <div className={`settings  px-3 px-${navbarBreakPoint}-0`}>
                  <div
                    className="bg-light border py-card "
                    style={{
                      paddingLeft: "1.4375rem",
                      paddingRight: "1.4375rem",
                      borderRadius: ".25rem",
                    }}
                  >
                    <img src={gallery} rounded width="120px" alt="" />
                    {/* <NavLink className="linkup" tag={Link} to="/pages/profile">Project Manager</NavLink> */}
                    <h6 style={{ marginTop: 10 }}>Project Manager</h6>
                    <h6>Working at: LLC</h6>
                    <h6>Education: project</h6>
                  </div>
                </div>
              </Link>
            )}
            {/* <NavbarVerticalMenu className="imgcenterrt" routes={routes} /> */}
          </Nav>
          <div className={`settings px-3 px-${navbarBreakPoint}-0`}>
            <hr className="border-300 my-3" />

            <div
              className="bg-light border py-card rounded"
              style={{ paddingLeft: "1.4375rem", paddingRight: "1.4375rem" }}
            >
              <h5 style={{ height: "2rem" }}>Top Skills Ratinggg</h5>

              <TopSkillPieChart
                value={80}
                left={55}
                textColor="#000000"
                pieColor="#A0B8DA"
              />
            </div>
          </div>

          {window.location.pathname === "/pages/com_profile" ||
          window.location.pathname === "/pages/recruiter" ||
          window.location.pathname === "/pages/certified_cand" ||
          window.location.pathname === "/pages/applied_cand" ||
          window.location.pathname === "/pages/appliedad_cand" ||
          window.location.pathname === "/pages/certifiedad_cand" ? (
            <div className={`settings px-3 px-${navbarBreakPoint}-0`}>
              <hr className="border-300 my-3" />
              <h6 className="text-uppercase fs--2 font-weight-semi-bold ls text-600">
                Company Information
              </h6>
              <div
                className="bg-light border py-card rounded"
                style={{ paddingLeft: "1.4375rem", paddingRight: "1.4375rem" }}
              >
                <Button className="primary cust_button set_vl">
                  <span className="nav-link-text set_vl1 gg">
                    <img src={gallery} width="120px" alt="" />
                  </span>

                  <li class="nav-item">
                    <span
                      aria-current="page"
                      class="nav-link active"
                      name="Applied Jobs"
                    >
                      <div class="d-flex align-items-left">
                        <span class="nav-link-text">Industory</span>
                      </div>
                    </span>
                  </li>
                  <li class="nav-item">
                    <span
                      aria-current="page"
                      class="nav-link active"
                      name="Job Alert"
                    >
                      <div class="d-flex align-items-left ">
                        <span class="nav-link-text">Location</span>
                      </div>
                    </span>
                  </li>
                  <li class="nav-item">
                    <span
                      aria-current="page"
                      class="nav-link active"
                      name="Availability"
                    >
                      <div class="d-flex align-items-left">
                        <span class="nav-link-text">Number of Employees</span>
                      </div>
                    </span>
                  </li>
                  <li class="nav-item">
                    <span
                      aria-current="page"
                      class="nav-link active"
                      name="Availability"
                    >
                      <div class="d-flex align-items-left">
                        <span class="nav-link-text">Legal</span>
                      </div>
                    </span>
                  </li>
                  <li class="nav-item">
                    <span
                      aria-current="page"
                      class="nav-link active"
                      name="Availability"
                    >
                      <div class="d-flex">
                        <span class="nav-link-text">Company Registration</span>
                      </div>
                    </span>
                  </li>
                  <li class="nav-item">
                    <span
                      aria-current="page"
                      class="nav-link active"
                      name="Availability"
                    >
                      <div class="d-flex align-items-left">
                        <span class="nav-link-text">Contact</span>
                      </div>
                    </span>
                  </li>
                </Button>{" "}
              </div>
              <hr className="border-300 my-3" />
              <h6 className="text-uppercase fs--2 font-weight-semi-bold ls text-600">
                Contact
              </h6>
              <div
                className="bg-light border py-card rounded"
                style={{ paddingLeft: "1.4375rem", paddingRight: "1.4375rem" }}
              >
                <Button className="primary cust_button">
                  <FalconEditor />{" "}
                </Button>
              </div>
            </div>
          ) : (
            <div className={`settings px-3 px-${navbarBreakPoint}-0`}>
              <hr className="border-300 my-3" />
              <div
                className="bg-light border py-card rounded"
                style={{ paddingLeft: "1.4375rem", paddingRight: "1.4375rem" }}
              >
                <h5 style={{ height: "2rem" }}>Profile Highlights</h5>
                <Button className="primary cust_button">
                  <NavItemWithViewText
                    item={{
                      name: "Certification",
                      path: "/Certification",
                      color: "#596573",
                      border: "#596573",
                      count: 0,
                    }}
                  />
                  <NavItemWithViewText
                    item={{
                      name: "Recomendations",
                      path: "/Recomendations",
                      color: "#596573",
                      border: "#596573",
                      count: 0,
                    }}
                  />
                  <NavItemWithViewText
                    item={{
                      name: "Regrets",
                      path: "/Regrets",
                      color: "#596573",
                      border: "#596573",
                      count: 0,
                    }}
                  />
                </Button>
              </div>

              <hr className="border-300 my-3" />

              <div
                className="bg-light border py-card"
                style={{
                  paddingLeft: "1.4375rem",
                  paddingRight: "1.4375rem",
                  visibility: "none",
                }}
              >
                <h5 style={{ height: "2rem" }}>Network</h5>

                <Button className="primary cust_button set_vl">
                  <NavItemWithRoundTextCount
                    item={{
                      name: "Following",
                      path: "/Following",
                      type: 2,
                      count: 0,
                    }}
                  />
                  <NavItemWithRoundTextCount
                    item={{
                      name: "Followers",
                      path: "/Followers",
                      type: 2,
                      count: 0,
                    }}
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
                    item={{
                      name: "Groups",
                      path: "/Groups",
                      type: 2,
                      count: 0,
                    }}
                  />
                </Button>
              </div>

              <hr className="border-300 my-3" />
              {/* <h6 className="text-uppercase fs--2 font-weight-semi-bold ls text-600">Tasks and Notification</h6> */}
              <div
                className="bg-light border py-card rounded"
                style={{ paddingLeft: "1.4375rem", paddingRight: "1.4375rem" }}
              >
                <h5 style={{ height: "2rem" }}>Notifications</h5>

                <Button className="primary cust_button set_vl">
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

                  <h6 className="nav-txt-algn-left">Own Company</h6>
                  <p class="nav-txt-algn-left nav-link-text">Abc Company</p>
                  <h6 className="nav-txt-algn-left">Role</h6>
                  <p class="nav-txt-algn-left nav-link-text">
                    Admin/Rec/Editor
                  </p>
                  <h6 className="nav-txt-algn-left">Notification</h6>

                  <NavItemWithRoundTextCount
                    item={{
                      name: "Join Request",
                      path: "/JoinNotification",
                      type: 2,
                      count: 0,
                    }}
                  />

                  <h6 className="nav-txt-algn-left">Joined Company</h6>
                  <p class="nav-txt-algn-left nav-link-text">Xyz Company</p>
                  <h6 className="nav-txt-algn-left">Role</h6>
                  <p class="nav-txt-algn-left nav-link-text">
                    Admin/Rec/Editor
                  </p>
                  <h6 className="nav-txt-algn-left">Notification</h6>

                  <NavItemWithRoundTextCount
                    item={{
                      name: "Join Request",
                      path: "/JoinNotification",
                      type: 2,
                      count: 0,
                    }}
                  />
                  <NavItemWithRoundTextCount
                    item={{
                      name: "Job Application",
                      path: "/ApplicationNotification",
                      type: 2,
                      count: 0,
                    }}
                  />
                  {/* <NavItemWithRoundTextCount item={{ name: "Certification Request", path: "/CertificationNotification", type: 2, count: 0 }}></NavItemWithRoundTextCount> */}
                </Button>
              </div>

              <hr className="border-300 my-3" />
              {/* <h6 className="text-uppercase fs--2 font-weight-semi-bold ls text-600">Jobs</h6> */}
              <div
                className="bg-light border py-card rounded"
                style={{ paddingLeft: "1.4375rem", paddingRight: "1.4375rem" }}
              >
                <h5 style={{ height: "2rem" }}>Jobs</h5>

                <Button className="primary cust_button set_vl">
                  <li class="nav-item">
                    <span
                      aria-current="page"
                      class="nav-link active"
                      name="Job Alert"
                    >
                      <div class="d-flex align-items-left">
                        <span class="nav-link-text">Job Alert</span>
                      </div>
                    </span>
                    <span class="nav-link-text dd">
                      <CustomInput
                        id="allow-follow"
                        onChange={() => setAllowFollow(!allowFollow)}
                        checked={allowFollow}
                        type="switch"
                      />
                    </span>
                  </li>
                  <li class="nav-item">
                    <span
                      aria-current="page"
                      class="nav-link active"
                      name="Job Alert"
                    >
                      <div class="d-flex align-items-left">
                        <span class="nav-link-text">Job Availability</span>
                      </div>
                    </span>
                    <span class="nav-link-text dd">
                      <CustomInput
                        id="allow-Avail"
                        onChange={() => setAllowAvail(!allowAvail)}
                        checked={allowAvail}
                        type="switch"
                      />
                    </span>
                  </li>
                </Button>
              </div>
            </div>
          )}
        </Scrollbar>
      </Collapse>
    </Navbar>
  );
};

export default NavbarVertical;
