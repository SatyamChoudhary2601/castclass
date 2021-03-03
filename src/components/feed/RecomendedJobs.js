import React from 'react';
import { Card, CardBody } from 'reactstrap';
import FalconCardHeader from '../common/FalconCardHeader';
import { isIterableArray } from '../../helpers/utils';
import EventSummary from '../event/EventSummary';
//import FalconCardFooterLink from '../common/FalconCardFooterLink';
import useFakeFetch from '../../hooks/useFakeFetch';
import Loader from '../common/Loader';
// import createMarkup from '../../helpers/createMarkup';
import rawEvents from '../../data/feed/recommededjobs';
import JobSummary from './JobsSummary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faSuitcase } from "@fortawesome/free-solid-svg-icons";
import ShareTo from './ShareTo';

const resolvedEvents = rawEvents;

const RecomendedJobs = () => {
  const { loading, data: events } = useFakeFetch(resolvedEvents);

  return (
    <Card className="mb-3">
      <FalconCardHeader title="Recommended Jobs" titleTag="h5" />
      <CardBody className="fs--1">
        {loading ? (
          <Loader />
        ) : (
            isIterableArray(events) &&
            events.map(({ id, availability, time, ...rest }, index) => (
              <>
                <JobSummary {...rest} divider={events.length !== index + 1} key={id}>
                  <span><FontAwesomeIcon icon={faClock}></FontAwesomeIcon> {time}
                    <FontAwesomeIcon className="mn-lt5 mn-rt5" icon={faSuitcase}>
                    </FontAwesomeIcon>{availability}</span>
                </JobSummary>
                <ShareTo></ShareTo>
              </>
            ))
          )}
      </CardBody>
      {/*<FalconCardFooterLink title="All Events" to="/pages/events" />*/}
    </Card>
  );
};

export default RecomendedJobs;
