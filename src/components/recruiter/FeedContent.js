import React, { Fragment, useContext } from 'react';

import FeedCard from '../../components/feed/FeedCard';
import { isIterableArray } from '../../helpers/utils';
import { FeedContext } from '../../context/Context';

const FeedContent = () => {
  const { feeds } = useContext(FeedContext);

  return (
    <Fragment>
      
      {isIterableArray(feeds) && feeds.map(feed => <FeedCard {...feed} key={feed.id} />)}
    </Fragment>
  );
};

export default FeedContent;
