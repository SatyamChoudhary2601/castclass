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
//import Profilevideo from './Profilevideo';
import Profiletopskill from './Profiletopskill';
import Profilecontact from './Profilecontact';
import Profileadv from './Profileadv';
const ProfileAside = () => {
  return (
    <Fragment>
      {/*<Profilevideo />
      <Experience experiences={experiences} className="mb-3" />
      <Education educations={educations} className="mb-3" />*/}
      <Profileadv />
      <Profiletopskill />
      <Profilecontact />
      
    </Fragment>
  );
};

export default ProfileAside;
