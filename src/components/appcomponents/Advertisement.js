import React from 'react';
import { Card, CardBody } from 'reactstrap';
import FalconCardHeader from '../common/FalconCardHeader';
import { isIterableArray } from '../../helpers/utils';
import EventSummary from '../event/EventSummary';
import useFakeFetch from '../../hooks/useFakeFetch';
import Loader from '../common/Loader';
import createMarkup from '../../helpers/createMarkup';
import rawEvents from '../../data/event/events';

const resolvedEvents = rawEvents.slice(3);

const Advertisement = () => {
  const { loading, data: events } = useFakeFetch(resolvedEvents);

  return (
    <Card className="mb-3">
      <FalconCardHeader title="Sponsered Ads" titleTag="h5" />
      <CardBody className="fs--1">
        {loading ? (
          <Loader />
        ) : (
          isIterableArray(events) &&
          events.map(({ id, additional, ...rest }, index) => (
            <EventSummary {...rest} divider={events.length !== index + 1} key={id}>
              <p className="text-1000 mb-0" dangerouslySetInnerHTML={createMarkup(additional)} />
            </EventSummary>
          ))
        )}
      </CardBody>
    </Card>
  );
};

export default Advertisement;
