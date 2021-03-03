import React, { Fragment } from 'react';
import { Button, Row, Col, Card } from 'reactstrap';
import team2 from '../../assets/img/team/2.jpg';
import ProfileBannerHighlights from './ProfileBannerHighlights';
import TopSkillPieChart from './TopSkillPieChart';
import likeButton from '../../assets/img/icons/like_icon.png';
import dislike from '../../assets/img/icons/dis_like.png';

import logo from '../../assets/img/icons/icon2.png';
const ProfileBanner = ({ profileInfo }) => {
 
  return (
    <Card style={{ padding: 10, marginBottom: 10 }}>
      <Row>
        <Col lg="4" className="pg-rt0">
          <div className="bg-img"  >
            <img src={team2} className="w-100 h-100"></img>
          </div>
        </Col>
        <Col className="bg-color-banner-col txt-algn-cr" lg="4">
          <h5 className="mb-1 mn-tp20 banner-h5">
            {profileInfo?.user?.user_f_name + " " + profileInfo?.user?.user_l_name}
          </h5>
          <h5 className="mn-tp10 banner-h5" >{profileInfo?.user?.user_title}</h5>
          <h5 className="mn-tp10 banner-h5">Working at:{}</h5>
          <h5 className="mn-tp10 banner-h5">Education: </h5>
          <img className="centerBlock mb-1 mn-tp20" src={logo}></img>
        </Col>
        <Col lg="4" className="pd-lt0">
          <div  className="w-100 h-100 profile-banner-bg">
            <ProfileBannerHighlights></ProfileBannerHighlights>
            <Row><Col> <TopSkillPieChart right={20} value={80} left={55} textColor="#FFFFFF" pieColor="#FFFFFF"></TopSkillPieChart>
            </Col><Col className="pt-4">
                <div><h6 className="clr-prof-highlight">Top Skill Rating</h6>
                  <img width="20" src={likeButton}></img> <img width="20" className="mn-lt10" src={dislike}></img>
                </div></Col></Row>
          </div>
        </Col>
      </Row>
    </Card>
  )
};

export default ProfileBanner;

