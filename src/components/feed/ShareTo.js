import React from 'react';
import fb from '../../assets/img/myicons/facebook.svg'
import twtr from '../../assets/img/myicons/twitter.svg'
import gplus from '../../assets/img/myicons/google-plus.svg'
import insta from '../../assets/img/myicons/instagram.svg'



const ShareTo = () => (
    <>
        <h6 className="mn-tp10">Share with friends</h6>
        <div className="circular-btn-with-shadow">
            <img src={fb}></img>
        </div>
        <div className="circular-btn-with-shadow">
            <img src={twtr}></img>
        </div>
        <div className="circular-btn-with-shadow">
            <img src={gplus}></img>
        </div>
        <div className="circular-btn-with-shadow">
            <img src={insta}></img>
        </div>

    </>


);


export default ShareTo;
