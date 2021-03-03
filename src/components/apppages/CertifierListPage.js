import React from "react";
// import { Card, CardBody, Button } from "reactstrap";
// import FalconCardHeader from "../common/FalconCardHeader";
// import { Link } from "react-router-dom";
import RightPanelCreatePage from '../appcomponents/RightPanelCreatePage';
import ContentWithLeftSideLayout from '../../layouts/ContentWithLeftSideLayout';
import PrivateCertifierListingPage from './PrivateCertifierListingPage'
const CertifierListPage = () => {
	return(
    <ContentWithLeftSideLayout leftSide={<RightPanelCreatePage />} isStickyAside={false}>
			<PrivateCertifierListingPage/>
      </ContentWithLeftSideLayout>
		)
}
export default CertifierListPage;