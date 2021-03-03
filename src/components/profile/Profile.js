import React, { useEffect, Fragment, useState } from 'react';
import ProfileBanner from './ProfileBanner';
import ProfileAside from './ProfileAside';
import ProfileContent from './ProfileContent';
import ProfileLeftPanel from './ProfileLeftPanel';
import ContentWithBothSideLayout from '../../layouts/ContentWithBothSideLayout'
import Loader from '../common/Loader';
import useGetFetch from '../../hooks/useGetFetch';



const Profile = () => {
  let api = 'profilenew/35542?default_user=' + localStorage.getItem('default_user');
  const { loading, data: profileinfo } = useGetFetch(api);
  let profileCompletion = profileinfo?.result?.data?.user?.profileCompletion;
  debugger
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) :
        (<ContentWithBothSideLayout banner={<ProfileBanner profileInfo={profileinfo?.result?.data} />} leftSide={<ProfileLeftPanel profileCompletion={profileCompletion} />}
          rightSide={<ProfileAside />} isStickyAside={false}>
          (<ProfileContent profileInfo={profileinfo} />
        </ContentWithBothSideLayout>)
      }
    </Fragment>
  );
};
export default Profile;
