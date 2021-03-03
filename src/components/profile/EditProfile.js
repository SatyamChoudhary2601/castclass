import React, { useEffect, Fragment, useState } from 'react';
import ProfileBanner from './ProfileBanner';
import ProfileAside from './ProfileAside';
import ProfileLeftPanel from './ProfileLeftPanel';
import ContentWithBothSideLayout from '../../layouts/ContentWithBothSideLayout'
import Loader from '../common/Loader';
import useGetFetch from '../../hooks/useGetFetch';
import EditableContent from './EditableContent.js'

const EditProfile = () => {
  let api = 'profilenew/35542?default_user=' + localStorage.getItem('default_user');
  const { loading, data: profileinfo } = useGetFetch(api);
  return (
    <Fragment>
      <ContentWithBothSideLayout banner={loading ? (
        <Loader />
      ) : (<ProfileBanner profileInfo={profileinfo?.data?.result} />)} leftSide={<ProfileLeftPanel />}
        rightSide={<ProfileAside />} isStickyAside={false}>
        {loading ? (
          <Loader />
        ) : (<EditableContent  />)}
      </ContentWithBothSideLayout>
    </Fragment>
  );
};
export default EditProfile;
