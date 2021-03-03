import React, { Fragment } from 'react';
import { Card, CardBody } from 'reactstrap';
import ProfileInfoTab from './ProfileInfoTab';
import { faLanguage, faAward, faUserCircle } from "@fortawesome/free-solid-svg-icons";


const PInfoDetail = ({ pi }) => (
  <Fragment><p>Date of birth : {pi?.user_dob}</p>
    <p>Marital status :{pi?.user_maritial_status}</p>
    <p>Email : {pi?.user_email}</p></Fragment>
);



const ProfileContent = ({ profileInfo }) =>
  (
    <Card className="mb-3" style={{ borderRadius: 5 }}>
      <CardBody>
        <h5 className="profile-intro-header">Personal Information</h5>
        <ProfileInfoTab icon="file-alt" title="Summary Interests" detail={profileInfo?.user_summary}></ProfileInfoTab>
        <ProfileInfoTab icon="heart" title="Interests" detail={profileInfo?.user_interest}></ProfileInfoTab>
        <ProfileInfoTab icon={faAward} title="Honor & Awards" detail={profileInfo?.user_summary}></ProfileInfoTab>
        <ProfileInfoTab icon={faLanguage} title="Language" detail={profileInfo?.user_summary}></ProfileInfoTab>
        <ProfileInfoTab icon={faUserCircle} title="Personal Information" detail={<PInfoDetail pi={profileInfo} />}></ProfileInfoTab>
      </CardBody>
    </Card>
  );
export default ProfileContent;
