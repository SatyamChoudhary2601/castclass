import React from 'react';
import ContentWithAsideLayout from '../../layouts/ContentWithAsideLayout';
import ProfileBanner from './ProfileBannerlect';
import ProfileAside from './ProfileAsidelect';
import ProfileContent from './ProfileContentlect';
import ProfileFooter from './ProfileFooterlect';

const Profile = () => {
  return (
    <ContentWithAsideLayout banner={<ProfileBanner />} aside={<ProfileAside />} footer={<ProfileFooter />}>
      <ProfileContent />
    </ContentWithAsideLayout>
  );
};

export default Profile;
