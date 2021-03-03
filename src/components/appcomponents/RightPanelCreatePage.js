import React, { Fragment } from 'react';
import Advertisement from './Advertisement';
import WhoViewedProfile from '../appcomponents/WhoViewedProfile';
import CreatePage from './CreatePage';
import PrivateCertifier from './PrivateCertifier';


const RightPanelCreatePage = () => (
    <Fragment>
        <CreatePage></CreatePage>
        {/* <PrivateCertifier /> */}
        <WhoViewedProfile></WhoViewedProfile>
        <Advertisement />
    </Fragment>
);

export default RightPanelCreatePage;
