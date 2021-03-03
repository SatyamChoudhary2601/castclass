import React from "react";
import { Card, CardBody, Button } from "reactstrap";
import FalconCardHeader from "../common/FalconCardHeader";
import { Link } from "react-router-dom";

const CreatePage = () => {
  return (
    <Card className="mb-3">
      <FalconCardHeader title="Create a company page" titleTag="h5" />
      <CardBody className="fs--1">
        Raise Brand Awareness, announce career apportunities and promote your
        products and services with company page
      </CardBody>

      <Link to="/pages/companytabs">
        <Button className="mn-lt20 mn-rt20 mn-bt20 bg-primary">Create</Button>
      </Link>
    </Card>
  );
};

export default CreatePage;
