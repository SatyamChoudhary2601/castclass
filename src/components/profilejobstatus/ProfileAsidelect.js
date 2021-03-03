import React, {Fragment} from 'react';
//import { Card, CardBody } from 'reactstrap';
//import EventSummary from '../event/EventSummary';
//import FalconCardHeader from '../common/FalconCardHeader';
// import FalconCardFooterLink from '../common/FalconCardFooterLink';
 //import Education from '../education/Education';
 //import Experience from '../experience/Experience';
// import createMarkup from '../../helpers/createMarkup';
// import { isIterableArray } from '../../helpers/utils';
//import events from '../../data/event/events';
//import educations from '../../data/education/educations';
//import experiences from '../../data/experience/experiences';
import AddToFeed from './omegalogo';
import Profileadv from './Profileadv';
import ProfileInterestjob from './ProfileInterestjob';
import Recentvisited from './Recentvisited';
const ProfileAside = () => {
  return (
    <Fragment>
       <AddToFeed />
      {/*<Experience experiences={experiences} className="mb-3" />*/}
      <Profileadv />
      <ProfileInterestjob />
      <Recentvisited name="Your Recently Visted "/>
    </Fragment>
  );
};

export default ProfileAside;
