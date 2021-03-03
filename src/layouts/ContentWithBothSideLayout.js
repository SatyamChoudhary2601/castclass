import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Row, Col } from 'reactstrap';

const ContentWithBothSideLayout = ({ banner, leftSide, rightSide, footer, isStickyAside, children }) => {
  return (
    <Fragment>
      <Row noGutters>
        <Col lg="3" className={classNames('pr-lg-3', { 'mb-3': !isStickyAside })}>
          {isStickyAside ? <div className="sticky-top sticky-sidebar">{leftSide}</div> : leftSide}
        </Col>
        <Col lg="9" className={classNames({ 'mb-3': !isStickyAside })}>
          {banner}
          <Row> <Col lg="8" className={classNames({ 'mb-3': !isStickyAside })}>
           {children}
          </Col>
            <Col lg="4" className={classNames('pl-lg-0', { 'mb-3': !isStickyAside })}>
              {isStickyAside ? <div className="sticky-top sticky-sidebar">{rightSide}</div> : rightSide}
            </Col></Row>
        </Col>

      </Row>
      {footer}
    </Fragment>
  );
};

ContentWithBothSideLayout.propTypes = {
  leftSide: PropTypes.element.isRequired,
  rightSide: PropTypes.element.isRequired,
  banner: PropTypes.element,
  footer: PropTypes.element,
  isStickyAside: PropTypes.bool,
  children: PropTypes.node
};

ContentWithBothSideLayout.defaultProps = { isStickyAside: true };

export default ContentWithBothSideLayout;
