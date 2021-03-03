import React, {Fragment} from 'react';
import Profilevideo from './Profilevideo';
import Profiletopskill from './Profiletopskill';
import Profilecontact from './Profilecontact';
import Advertisement  from '../appcomponents/Advertisement';
const ProfileAside = () => {
  return (
    <Fragment>
      <Profilevideo />
      <Profiletopskill />
      <Advertisement/>
      </Fragment>
  );
};

export default ProfileAside;
