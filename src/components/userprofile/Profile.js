import React from 'react';
import ContentWithAsideLayout from '../../layouts/ContentWithAsideLayout';
import ProfileBanner from '../profile/ProfileBanner';
import ProfileAside from './ProfileAside';
import ProfileContent from './ProfileContent';
import ProfileFooter from './ProfileFooter';
import profileinfo from '../../data/profile/profileinfo';

const Profile = () => {
  return (
    <ContentWithAsideLayout banner={<ProfileBanner profileInfo={profileinfo} />}aside={<ProfileAside />} footer={<ProfileFooter />}>
      <ProfileContent />
    </ContentWithAsideLayout>
  );
};

export default Profile;
