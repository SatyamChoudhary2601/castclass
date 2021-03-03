import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Badge, Media } from 'reactstrap';
import Calendar from '../common/Calendar';
import ShareTo from './ShareTo';

const EventBadge = ({ text, ...rest }) => <Badge {...rest}>{text}</Badge>;

EventBadge.propTypes = {
  ...Badge.propTypes,
  text: PropTypes.string.isRequired
};

const JobSummary = ({ calendar, title, badge, organizer, location, divider, to, children }) => {

  // console.log(children);
  // debugger

  return (
    <Media>
      <Calendar {...calendar} />
      <Media body className="position-relative pl-3">
        <h6 className="fs-0 mb-0">
          <Link to={to}>{title}</Link> {badge && <EventBadge {...badge} className="ml-1" />}
        </h6>
        <p className="mb-1">
          <Link to="#!" className="text-700">
            {organizer}
          </Link>
        </p>
        {children}
      </Media>
    </Media>
  );
}
JobSummary.propTypes = {
  calendar: PropTypes.shape(Calendar.propTypes).isRequired,
  title: PropTypes.string.isRequired,
  organizer: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  badge: PropTypes.shape(EventBadge.propTypes),
  location: PropTypes.string,
  children: PropTypes.node,
  divider: PropTypes.bool
};

JobSummary.defaultProps = { divider: true };

export default JobSummary;
