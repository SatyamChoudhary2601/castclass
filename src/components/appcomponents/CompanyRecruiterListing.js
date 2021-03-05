import React, { Fragment, useEffect, useState } from "react";
import {
  Alert,
  Card,
  CardBody,
  Col,
  CustomInput,
  Form,
  Input,
  Row,
  Button
} from "reactstrap";
import {useHistory} from 'react-router-dom'
import FalconCardHeader from "../common/FalconCardHeader";
import Loader from "../common/Loader";
import { isIterableArray } from "../../helpers/utils";
import edit from "../../assets/img/myicons/edit.svg";
import delet from "../../assets/img/myicons/delete.svg";
import company from "../../assets/img/myicons/work.svg";
import useGetFetch from "../../hooks/useGetFetch";
import { Link } from "react-router-dom";
import axios from 'axios'
import Modal from 'react-awesome-modal';


const PageComponent = ({ api, title, setTotalPage, limit }) => {
  const { loading, data: listItems } = useGetFetch(api);
  const [isModalOpen, setModalOpen] = useState(false)
  const [deleteItem, setDeleteItem] = useState(false)
  const [deleteID, setDeleteID] = useState(null)

  // debugger;
  console.log("recvd api val= " + api);

  let userId = localStorage.getItem("user_id");
  let listData = listItems?.result?.data;
  console.log(listData, "-------------listData---------------");
  const history = useHistory();

  useEffect(() => {
    setTotalPage(Math.floor(listItems?.result?.total_results / limit) + 1);
    // debugger;
    console.log("recvd api val= " + api);
    if(deleteItem == true){
      history.push('/pages/company')
    }
  }, [listItems, api,deleteItem]);

  let bodyFormData = new FormData();

  const deleteCompany = (id) => {
    setModalOpen(true)
setDeleteID(id)
   

  
  }

const yesDelete = () => {
  setDeleteItem(true)
          bodyFormData.append('default_user', localStorage.getItem('default_user'));
    bodyFormData.append('company_id', deleteID);

    axios({
    method: 'post',
    url: 'http://139.59.35.110/castclass/api/v2/companies/delete',
    data: bodyFormData,
    headers: {'Content-Type': 'multipart/form-data' }
    })
    .then(function (response) {

        
if(response?.data == "success"){
 window.location.reload()
  // closeModal()
}

  

  
    })
    .catch(function (response) {
        //handle error
        console.log(response);
    });

 

}

  const closeModal = () => {
        setModalOpen(false)
    }


  return (
    <>
    <Modal visible={isModalOpen} width="600" height="350" effect="fadeInUp" onClickAway={() =>closeModal()}>
        <div style={{textAlign:"center"}}>
            <img src="https://images.vexels.com/media/users/3/128917/isolated/preview/3fa111197f6aee0add60c05829d0f196-exclamation-point-icon-by-vexels.png" width="100px" style={{marginTop:'40px',marginBottom:'20px', textAlign:'center'}}/>

            <h1 style={{textAlign:'center'}}>Are you sure?</h1>
            <p style={{textAlign:'center'}}>You won't be able to revert this!</p>
            <Button style={{marginTop:'10px', marginRight:'10px'}} color="primary" size="lg" onClick={() => yesDelete()}>Yes, delete it!</Button>
            <Button style={{marginTop:'10px'}} color="danger" size="lg" onClick={() => closeModal()}>Cancel</Button>
        </div>
    </Modal>
      {" "}
      {loading ? (
        <Loader />
      ) : isIterableArray(listData) ? (
        listData.map((listItem, index) => {
          return (
           
              <div className="media mn-tp30 pd-bt30 border-bottom-list">
                <div className="media-left">
                  <img
                    height="100"
                    width="100"
                    src={
                      listItem?.company_logo == "" ||
                      listItem?.company_logo === null
                        ? company
                        : listItem?.company_logo
                    }
                    className="media-object official-logo"
                  />
                </div>
                <div className="media-body pd-lt20">
                  <h5 className="media-heading field">
                    <Link className="reverse" to={{
              pathname:`/page/${listItem.id}`,
              state:{
                data:listItem
              }
            } } >
                      {listItem?.company_name}
                    </Link>
                    {listItem?.user_id == userId && (
                      <Fragment>
                        {" "}
                        <Link to={{
                          pathname:`/pages/edit/${listItem.id}`,
                          state:{
                            itemData:listItem
                          }
                        }}>
                        
                        <img
                          width="20"
                          className="va-bm mn-lt20"
                          src={edit}
                          title="edit"
                        />
                        </Link>
                        <span
                          onClick={e => deleteCompany(listItem.id)}

                        >
                        <img
                          width="20"
                          className="va-bm mn-lt20"
                          src={delet}
                          title="delete"
                          onClick={e => deleteCompany(listItem.id)}
                        />
                        </span>
                      </Fragment>
                    )}
                  </h5>
                  <div className="font13">{listItem?.company_profile}</div>
                  <div className="space20" />

                  <div className="required-skills">
                    <div className="txt_666 font13">
                      Skills/Roles hire for:{" "}
                      {listItem?.company_skills && listItem?.company_skills}
                    </div>
                  </div>
                  <div className="space15" />
                  <div className="job-counts font13">
                    {listItem?.activeJobs} Active Jobs | Last Active on
                    {listItem?.lastActiveOn === null && listItem?.lastActiveOn}
                  </div>
                  <div className="job-counts font13">
                    Location:{" " + listItem?.company_location}
                  </div>
                </div>
              </div>
                   );
        })
      ) : (
        <Row className="p-card">
          <Col>
            <Alert color="info" className="mb-0">
              No {title} found
            </Alert>
          </Col>
        </Row>
      )}
    </>
  );
};

const CompanyRecruiterListing = ({ title, type }) => {
  const [pageArray, setPageArray] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [clicked, setClicked] = useState(1);
  const limit = 10;
  // debugger;
  const [api, setApi] = useState(
    "/company/list?limit=" +
      limit +
      "&offset=0&recruitement_company=" +
      type +
      "&default_user=" +
      localStorage.getItem("default_user")
  );
  useEffect(() => {
    let pageArray = [];
    for (let i = 0; i < totalPage; i++) pageArray.push(i + 1);
    setPageArray(pageArray);
  }, [totalPage]);

  function onPageClick(index) {
    console.log(index);
    setClicked(index);
    let offset = index * limit - limit;
    setApi(
      "/company/list?limit=" +
        limit +
        "&offset=" +
        offset +
        "&recruitement_company=" +
        type +
        "&default_user=" +
        localStorage.getItem("default_user")
    );
    console.log("set api val= " + api);
  }

  return (
    <Fragment>
      <Card>
        <CardBody>
          <FalconCardHeader title={title} />
          <div>
            {pageArray.map((count, index) => {
              return (
                <span
                  className={
                    ("page-but mn-tp20",
                    clicked == index + 1 ? "btn-select" : "btn-unselect")
                  }
                  onClick={() => onPageClick(count)}
                >
                  {count}
                </span>
              );
            })}
          </div>
          <PageComponent
            setApi={setApi}
            setTotalPage={setTotalPage}
            api={api}
            limit={limit}
          />
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default CompanyRecruiterListing;
