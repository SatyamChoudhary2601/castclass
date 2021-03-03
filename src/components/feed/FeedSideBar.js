import React, { Fragment } from 'react';
import Advertisement from './Advertisement';
import RecomendedJobs from './RecomendedJobs';
import WhoViewedProfile from '../appcomponents/WhoViewedProfile';
import VisitedProfile from './VisitedProfile';

import RecommendedConnection from './RecommendedConnection';
import AddToFeed from './AddToFeed';
const FeedSideBar = () => (
  <Fragment>
    <RecomendedJobs></RecomendedJobs>
    <AddToFeed></AddToFeed>
    <RecommendedConnection></RecommendedConnection>
    <WhoViewedProfile></WhoViewedProfile>
    <Advertisement/>
    <VisitedProfile></VisitedProfile>
  </Fragment>
);

export default FeedSideBar;
