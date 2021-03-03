
import React from 'react';
import ContentWithAsideLayout from '../../layouts/ContentWithAsideLayout';
import CompanyRecruiterListing from '../appcomponents/CompanyRecruiterListing';
import RightPanelCreatePage from '../appcomponents/RightPanelCreatePage';
import ContentWithLeftSideLayout from '../../layouts/ContentWithLeftSideLayout';

const RecruitersListPage = () => {
    return (
        <ContentWithLeftSideLayout leftSide={<RightPanelCreatePage/>} isStickyAside={false}>
            <CompanyRecruiterListing title={"Recruitmet Listing Page"}  type="1" ></CompanyRecruiterListing>
        </ContentWithLeftSideLayout>
    );

}

export default RecruitersListPage;