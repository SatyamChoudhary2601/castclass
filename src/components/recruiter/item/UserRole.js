import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Table,
  Button,
  Input,
  Form,
  FormGroup,
  Label,
  Container,
} from "reactstrap";
import "./UserRole.css";
import AdminContent from "./AdminContent";
import EditorContent from "./EditorContent";
import RecruiterContent from "./RecruiterContent.js";
import JobManagerContent from "./JobManagerContent.js";
import PrivateCertifierContent from "./PrivateCertifierContent.js";
import Modal from "react-awesome-modal";
import axios from "axios";

const UserRole = () => {
  const [showAdmin, setShowAdmin] = useState(true);
  const [showEditor, setShowEditor] = useState(false);
  const [showRecruiter, setShowRecruiter] = useState(false);
  const [showJobManager, setShowJobManager] = useState(false);
  const [showPrivateCertifier, setShowPrivateCertifier] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const onClickAdmin = () => {
    setShowAdmin(true);
    setShowEditor(false);
    setShowRecruiter(false);
    setShowJobManager(false);
    setShowPrivateCertifier(false);
  };
  const onClickEditor = () => {
    setShowEditor(true);
    setShowAdmin(false);
    setShowRecruiter(false);
    setShowJobManager(false);
    setShowPrivateCertifier(false);
  };

  const onClickRecruiter = () => {
    setShowRecruiter(true);
    setShowEditor(false);
    setShowAdmin(false);
    setShowEditor(false);
    setShowJobManager(false);
    setShowPrivateCertifier(false);
  };
  const onClickJobManager = () => {
    setShowJobManager(true);
    setShowRecruiter(false);
    setShowEditor(false);
    setShowAdmin(false);
    setShowEditor(false);
    setShowPrivateCertifier(false);
  };

  const onClickPrivateCertifier = () => {
    setShowPrivateCertifier(true);
    setShowJobManager(false);
    setShowRecruiter(false);
    setShowEditor(false);
    setShowAdmin(false);
    setShowEditor(false);
  };
  const inviteUserModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  console.log(isModalOpen, "isModalOpen");
  const style = {};
  let bodyFormData = new FormData();

  bodyFormData.append("default_user", localStorage.getItem("default_user"));

  useEffect(() => {
    axios({
      method: "post",
      url: "http://139.59.35.110/castclass/api/v2/profile/viewprofile",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    }).then((res) => console.log(res));
  }, []);

  return (
    <>
      {isModalOpen && (
        <Modal
          visible={isModalOpen}
          width="500"
          height="410"
          effect="fadeInUp"
          onClickAway={() => closeModal()}
        >
          <div>
            <p className="modal_header">Invite User</p>
            <hr />
            <div>
              <Form>
                <div className="form_input">
                  <FormGroup>
                    <Label>Name</Label>
                    <Input type="text" name="name" placeholder="Name" />
                  </FormGroup>
                  <FormGroup>
                    <Label>Email</Label>
                    <Input type="email" name="email" placeholder="Email" />
                  </FormGroup>
                  <FormGroup>
                    <Label>Role</Label>
                    <Input type="select" name="role">
                      <option>Admin</option>
                      <option>Editor</option>
                      <option>Recruiter</option>
                      <option>Job Manager</option>
                      <option>Private Certifier</option>
                    </Input>
                  </FormGroup>
                </div>
                <hr />
                <div className="button_class">
                  <Button color="primary" size="md">
                    Submit
                  </Button>
                  <Button
                    color="primary"
                    size="md"
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </Modal>
      )}
      <Card>
        <CardBody>
          <Row>
            <Col md="4">
              <Table bordered size="lg" responsive>
                <thead>
                  <tr>
                    <th className="table_Header">Company User Roles</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      className={showAdmin ? "table_data_active" : "table_data"}
                      onClick={onClickAdmin}
                    >
                      Admin
                    </td>
                  </tr>
                  <tr>
                    <td
                      className={
                        showEditor ? "table_data_active" : "table_data"
                      }
                      onClick={onClickEditor}
                    >
                      Editor
                    </td>
                  </tr>
                  <tr>
                    <td
                      className={
                        showRecruiter ? "table_data_active" : "table_data"
                      }
                      onClick={onClickRecruiter}
                    >
                      Recruiter
                    </td>
                  </tr>
                  <tr>
                    <td
                      className={
                        showJobManager ? "table_data_active" : "table_data"
                      }
                      onClick={onClickJobManager}
                    >
                      Job Manager
                    </td>
                  </tr>
                  <tr>
                    <td
                      className={
                        showPrivateCertifier
                          ? "table_data_active"
                          : "table_data"
                      }
                      onClick={onClickPrivateCertifier}
                    >
                      Private Certifier
                    </td>
                  </tr>
                </tbody>
                <tfoot />
              </Table>
            </Col>
            <Col md="8" className="right_section">
              <Button color="primary" size="lg" onClick={inviteUserModal}>
                Invite User
              </Button>
              <hr />
              {showAdmin && <AdminContent />}
              {showEditor && <EditorContent />}
              {showRecruiter && <RecruiterContent />}
              {showJobManager && <JobManagerContent />}
              {showPrivateCertifier && <PrivateCertifierContent />}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
};

export default UserRole;
