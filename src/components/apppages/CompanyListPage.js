
import React from 'react';
import ContentWithAsideLayout from '../../layouts/ContentWithAsideLayout';
import CompanyRecruiterListing from '../appcomponents/CompanyRecruiterListing';
import RightPanelCreatePage from '../appcomponents/RightPanelCreatePage';
import ContentWithLeftSideLayout from '../../layouts/ContentWithLeftSideLayout';

const CompanyListPage = () => {
    return (
        <ContentWithLeftSideLayout leftSide={<RightPanelCreatePage />} isStickyAside={false}>
            <CompanyRecruiterListing title={"Company Listing Page"} type="0" ></CompanyRecruiterListing>
        </ContentWithLeftSideLayout>
    );

}

export default CompanyListPage;