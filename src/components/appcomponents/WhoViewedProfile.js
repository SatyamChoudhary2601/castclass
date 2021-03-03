import React from 'react';
import useFakeFetch from '../../hooks/useFakeFetch';
import { Card, CardBody } from 'reactstrap';
import FalconCardHeader from '../common/FalconCardHeader';
import { Link } from 'react-router-dom';
import Loader from '../common/Loader';
import { isIterableArray } from '../../helpers/utils';
import PersonFollow from '../feed/PersonFollow';
import rawPeople from '../../data/people/people';

const resolvedPeople = rawPeople.slice(0, 3);

const WhoViewedProfile = () => {
  const { loading: peopleLoading, data: people } = useFakeFetch(resolvedPeople);

  return (
    <Card className="mb-3">
      <FalconCardHeader title="Who viewed your profile" titleTag="h5">
        <Link className="fs--1" to="/pages/people">
          See all
        </Link>
      </FalconCardHeader>
      <CardBody>
        {peopleLoading ? (
          <Loader />
        ) : (
            isIterableArray(people) &&
            people.map((person, index) => (
              <PersonFollow {...person} key={person.id} divider={people.length === index + 1} />
            ))
          )}
      </CardBody>
    </Card>
  );
};

export default WhoViewedProfile;
