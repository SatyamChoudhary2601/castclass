import React from "react";
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
import Member from "../page/Member";
import Loader from "../common/Loader";
import FalconCardHeader from "../common/FalconCardHeader";
import { isIterableArray } from "../../helpers/utils";
import useFakeFetch from "../../hooks/useFakeFetch";
import rawPeople from "../../data/people/people";
import peopleCategories from "../../data/people/peopleCategories";
import { Button } from "reactstrap";
import ItemBanner from "./item/ItemBanner";
import g from "../../assets/img/logos/g.png";
import hp from "../../assets/img/logos/hp.png";
import team2 from "../../assets/img/team/2.jpg";
import generic4 from "../../assets/img/generic/4.jpg";
import apple from "../../assets/img/logos/apple.png";
import { Fragment } from "react";

const rawPeopleSlice = rawPeople.splice(0, 24);

const RecruiterList = () => {
  const { loading, data: people, setData: setPeople } = useFakeFetch(
    rawPeopleSlice
  );

  const searchPeople = ({ target }) => {
    const keyword = target.value.toLowerCase();
    const filteredResult = rawPeople.filter(
      (person) =>
        person.name.toLowerCase().includes(keyword) ||
        person.institution.toLowerCase().includes(keyword)
    );

    setPeople(keyword.length ? filteredResult : rawPeople);
  };

  return (
    <Fragment>
      <ItemBanner>
        <ItemBanner.Header avatarSrc={team2} coverSrc={generic4} />
        <ItemBanner.Body
          name="Anthony Hopkins"
          verified
          headline="Senior Software Engineer at Technext Limited"
          location="New York, USA"
          noOfFollowers={330}
          previousJobs={[
            { institution: "Google", src: g },
            { institution: "Apple", src: apple },
            { institution: "Hewlett Packard", src: hp },
          ]}
        >
          <Button color="falcon-primary" size="sm" className="px-3">
            Following
          </Button>
          <Button color="falcon-default" size="sm" className="px-3 ml-2">
            Message
          </Button>
        </ItemBanner.Body>
      </ItemBanner>
      <Card className="pd20">
        <h4>Skills/Roles hire for: </h4>
        <p>0 active jobs|last active on 22 Jan 2020</p>
      </Card>
    </Fragment>
  );
};

export default RecruiterList;
