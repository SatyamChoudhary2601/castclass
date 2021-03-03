import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Row, Col } from 'reactstrap';

const ContentWithLeftSideLayout = ({ banner, leftSide, footer, isStickyAside, children }) => {
    return (
        <Fragment>
            {banner}
            <Row noGutters>
                <Col lg="3" className={classNames('pr-lg-4', { 'mb-3': !isStickyAside })}>
                    {isStickyAside ? <div className="sticky-top sticky-sidebar">{leftSide}</div> : leftSide}
                </Col>
                <Col lg="9" className={classNames({ 'mb-3': !isStickyAside })}>
                    {children}
                </Col>

            </Row>
            {footer}
        </Fragment>
    );
};

ContentWithLeftSideLayout.propTypes = {
    aside: PropTypes.element.isRequired,
    banner: PropTypes.element,
    footer: PropTypes.element,
    isStickyAside: PropTypes.bool,
    children: PropTypes.node
};

ContentWithLeftSideLayout.defaultProps = { isStickyAside: true };

export default ContentWithLeftSideLayout;
