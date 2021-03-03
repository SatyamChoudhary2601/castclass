import React from 'react';
import ContentWithAsideLayout from '../../layouts/ContentWithAsideLayout';
import FeedContent from './FeedContent';
import FeedSideBar from './FeedSideBar';
import FeedProvider from './FeedProvider';
import ContentWithBothSideLayout from '../../layouts/ContentWithBothSideLayout';
import FeedLeftPanel from './FeedLeftPanel';

const Feed = () => (
  <FeedProvider>
    {/* <ContentWithAsideLayout aside={<FeedSideBar />} isStickyAside={false}> */}
     <ContentWithBothSideLayout leftSide={<FeedLeftPanel/>} rightSide={<FeedSideBar/>} isStickyAside={false} >
      <FeedContent />
    </ContentWithBothSideLayout>
    {/* </ContentWithAsideLayout> */}
  </FeedProvider>
);

export default Feed;
