import React, { useState, useEffect } from "react";
import { Card, CardBody, Row, Col, Table, Button, Input } from "reactstrap";
import "./UserRole.css";
import axios from "axios";
import config from "../../../helpers/config";

const PrivateCertifierContent = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(config.API_URL() + "privatecertifier")
      .then((res) => setData(res.data.result.data));
  }, []);
  console.log(data, "certifier");
  const [showAdmin, setShowAdmin] = useState(true);
  const onClickAdmin = () => {
    setShowAdmin(!showAdmin);
  };
  console.log(showAdmin, "showAdmin");
  return (
    <Table bordered>
      <thead>
      <tr>
              <th></th>
              <th></th>
              
              <th colspan="2"><Input type="text" placeholder="search for names..." className="header_input"/></th>
            </tr>
        <tr>
          <th>Certifier Name</th>
          <th>Company Info</th>
          <th>Email</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((certifier) => (
            <tr key={certifier.id}>
              <td>
                {certifier.certifier_name === null
                  ? "NA"
                  : certifier.certifier_name}
              </td>
              <td>
                {certifier.company_info === null
                  ? "NA"
                  : certifier.company_info}
              </td>
              <td>{certifier.email === null || "" ? "NA" : certifier.email}</td>
              <td>{certifier.status === "1" ? "Active" : "Deactive"}</td>
            </tr>
          ))}
      </tbody>
      <tfoot />
    </Table>
  );
};

export default PrivateCertifierContent;
