import React, { Fragment } from 'react';
import Education from '../education/Education';
import Experience from '../experience/Experience';
import SettingsAccount from '../Settings/SettingsAccount';
import SettingsBilling from '../Settings/SettingsBilling';
import SettingsChangePassword from '../Settings/SettingsChangePassword';
import SettingsDangerZone from '../Settings/SettingsDangerZone';
import SettingsProfile from '../Settings/SettingsProfile';

import experiences from '../../data/experience/experiences';
import educations from '../../data/education/educations';
import ProfileLeftPanel from '../profile/ProfileLeftPanel';
import ProfileBanner from '../profile/ProfileBanner';

import ContentWithBothSideLayout from '../../layouts/ContentWithBothSideLayout'
import Loader from '../common/Loader';
import useGetFetch from '../../hooks/useGetFetch';


const SettingsAside = () => (
  <Fragment>
    <SettingsAccount />
    <SettingsBilling />
    <SettingsChangePassword />
    <SettingsDangerZone />
  </Fragment>
);

const SettingsContent = ({profileinfo}) => (
  <Fragment>
    <SettingsProfile profileinfo={profileinfo}/>
    <Experience experiences={experiences} isEditable className="mb-3" />
    <Education educations={educations} isEditable className="mb-3 mb-lg-0" />
  </Fragment>
);

const Settings = () => {
  let api = 'profilenew/35542?default_user=' + localStorage.getItem('default_user');
  const { loading, data: profileinfo } = useGetFetch(api);
  return (
    <Fragment>
      <ContentWithBothSideLayout banner={loading ? (
        <Loader />
      ) : (<ProfileBanner profileInfo={profileinfo?.result?.data} />)} leftSide={<ProfileLeftPanel />}
        rightSide={<SettingsAside />} isStickyAside={false}>
        {loading ? (
          <Loader />
        ) : (<SettingsContent profileInfo={profileinfo} />)}
      </ContentWithBothSideLayout>
    </Fragment>
  );
};


export default Settings;
