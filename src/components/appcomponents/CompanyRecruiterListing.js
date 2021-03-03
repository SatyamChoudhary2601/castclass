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
} from "reactstrap";
import FalconCardHeader from "../common/FalconCardHeader";
import Loader from "../common/Loader";
import { isIterableArray } from "../../helpers/utils";
import edit from "../../assets/img/myicons/edit.svg";
import delet from "../../assets/img/myicons/delete.svg";
import company from "../../assets/img/myicons/work.svg";
import useGetFetch from "../../hooks/useGetFetch";
import { Link } from "react-router-dom";

const PageComponent = ({ api, title, setTotalPage, limit }) => {
  const { loading, data: listItems } = useGetFetch(api);
  // debugger;
  console.log("recvd api val= " + api);

  let userId = localStorage.getItem("user_id");
  let listData = listItems?.result?.data;
  console.log(listData, "----------------------------");

  useEffect(() => {
    setTotalPage(Math.floor(listItems?.result?.total_results / limit) + 1);
    // debugger;
    console.log("recvd api val= " + api);
  }, [listItems, api]);

  return (
    <>
      {" "}
      {loading ? (
        <Loader />
      ) : isIterableArray(listData) ? (
        listData.map((listItem, index) => {
          return (
            <Link to={{
              pathname:`/page/${listItem.id}`,
              state:{
                data:listItem
              }
            } } >
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
                    <Link className="reverse" to={`/page/${listItem.id}`}>
                      {listItem?.company_name}
                    </Link>
                    {listItem?.user_id == userId && (
                      <Fragment>
                        {" "}
                        <img
                          width="20"
                          className="va-bm mn-lt20"
                          src={edit}
                          title="Remove"
                        />
                        <img
                          width="20"
                          className="va-bm mn-lt20"
                          src={delet}
                          title="d"
                        />
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
            </Link>
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
