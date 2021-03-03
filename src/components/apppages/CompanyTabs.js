import React from "react";
import { Card, CardBody, Button, Row, Col } from "reactstrap";
import FalconCardHeader from "../common/FalconCardHeader";
import office from "../../assets/img/media/office.svg";
import "./CompanyTabs.css";
import { Link } from "react-router-dom";
const CompanyTabs = () => {
  return (
    <>
      <Card className="mb-3">
        <FalconCardHeader
          title="Create a Cast Class Page"
          titleTag="h5"
          className="bg-light text-center pad-cl card-header"
        />
        <CardBody className="fs--1">
          <Row>
            <Col md="4" xs="12">
              <Link to="/pages/createcompany">
                <div className="content_company">
                  <img
                    src={office}
                    height="50px"
                    width="50px"
                    className="image_class"
                  />
                  <h4 className="heading" style={{textDecoration:"none"}}>Create Company</h4>
                </div>
              </Link>
            </Col>
            <Col md="4" xs="12">
              <Link to="/pages/createrecruitment">
              
              <div className="content_company">
                <img
                  src={office}
                  height="50px"
                  width="50px"
                  className="image_class"
                />
                <h4 className="heading">Recruitment Company</h4>
              </div>
              </Link>
            </Col>
            <Col md="4" xs="12">
            <Link to="/pages/createcertifier">
              <div className="content_company">
                <img
                  src={office}
                  height="50px"
                  width="50px"
                  className="image_class"
                />
                <h4 className="heading">Private Certifier</h4>
              </div>
              </Link>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
};

export default CompanyTabs;
