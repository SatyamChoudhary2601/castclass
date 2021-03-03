
import React, { useState, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CardBody } from 'reactstrap';

const ProfileInfoTab = ({ icon, title, detail}) => {
    
    return (
        <Fragment>
           <h5 className="mn-lt10 mn-tp20"> <FontAwesomeIcon className="mn-lt10 mn-rt10" color="#32B2EF" icon={icon} /> {title}</h5>
            <CardBody className="text-justify mn-lt10">
                <p>
                    {detail}
                </p>
            </CardBody>
            <div className="bg-gray1 mn-tp20"></div>
        </Fragment>
    );
};

export default ProfileInfoTab;
