// const { default: CommonRightPanel } = require("../appcomponents/CommonRightPanel")
import React from 'react'
import CommonLeftPanel from '../appcomponents/CommonRightPanel'
import ProfilePercent from '../appcomponents/ProfilePercent';



const ProfileLeftPanel = (({profileCompletion}) => {

    return (<>
        <ProfilePercent percent={profileCompletion} ></ProfilePercent>
        <CommonLeftPanel items={[]}></CommonLeftPanel>
    </>);
});
export default ProfileLeftPanel;