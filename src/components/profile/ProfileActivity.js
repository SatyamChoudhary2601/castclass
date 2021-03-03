import React, { useEffect, Fragment, useState } from 'react';
import ContentWithAsideLayout from '../../layouts/ContentWithAsideLayout';
import ProfileBanner from './ProfileBanner';
import ProfileAside from './ProfileAside';
import ProfileLeftPanel from './ProfileLeftPanel';
import ContentWithBothSideLayout from '../../layouts/ContentWithBothSideLayout'
import Loader from '../common/Loader';
import ActivityContent from './ActivityContent';
import useGetFetch from '../../hooks/useGetFetch';

const ProfileActivity = () => {
  let api = 'profilenew/35542?default_user=' + localStorage.getItem('default_user');
  const { loading, data: profileinfo } = useGetFetch(api);
  let profileCompletion = profileinfo?.result?.data?.user?.profileCompletion;
  
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) :
        (<ContentWithBothSideLayout banner={<ProfileBanner profileInfo={profileinfo?.result?.data} />} leftSide={<ProfileLeftPanel profileCompletion={profileCompletion} />}
          rightSide={<ProfileAside />} isStickyAside={false}>
          {<ActivityContent profileInfo={profileinfo?.data?.result} />}
        </ContentWithBothSideLayout>
        )}
    </Fragment>
  );
};
export default ProfileActivity;