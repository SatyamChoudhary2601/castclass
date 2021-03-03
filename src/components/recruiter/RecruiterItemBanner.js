import React, { Component } from 'react';
import { CardBody, Row, Col } from 'reactstrap';
import ProfileBannerIntro from '../profile/ProfileBannerIntro';
import ProfileBannerHighlights from '../profile/ProfileBannerHighlights';
import PropTypes from 'prop-types';
import { Card } from 'reactstrap';
import ItemBannerHeader from './item/ItemBannerHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faBullseye, faQuestion, faShare } from "@fortawesome/free-solid-svg-icons";
import share from '../../assets/img/myicons/share.svg';
import hand from '../../assets/img/myicons/hand.svg';


const RecruiterBannerBody = props => {
  return (
    <CardBody>
      <Row>
        <ProfileBannerIntro {...props} />
        <Col className="pl-2 pl-lg-2" style={{marginTop:-60}}>
          <h6 className="txt-right mn-rt30"><img className="mn-rt10" width="20" src={hand}></img>follow(56)</h6>
          <h6 className="txt-right mn-rt30"><img className="mn-rt10" width="20" src={share}></img>Share(26)</h6>
        </Col>
      </Row>
    </CardBody>
  );
};



class RecruiterItemBanner extends Component {
  static Header = ItemBannerHeader;
  static Body = RecruiterBannerBody;

  render() {
    return <Card className="mb-3">{this.props.children}</Card>;
  }
}

RecruiterItemBanner.propTypes = { children: PropTypes.node };

export default RecruiterItemBanner;
