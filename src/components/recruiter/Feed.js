import React from 'react';
import FeedContent from './FeedContent';

import FeedProvider from '../../components/feed/FeedProvider';

const Feed = () => (
  <FeedProvider>
    <FeedContent />
  </FeedProvider>
);

export default Feed;
