import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link,useHistory } from 'react-router-dom';
import Avatar from '../common/Avatar';
import createMarkup from '../../helpers/createMarkup';
import config from './../../helpers/config';
import { toast } from 'react-toastify';



const Notification = ({ to, avatar, time, className, unread, flush, emoji, children, request_status, from_id }) => (
 
  <Link onClick={() => redirectUserProfile({from_id})}  className={classNames('notification', { 'bg-200': unread, 'notification-flush': flush }, className)} to={to}>
    {avatar && (
      <div className="notification-avatar">
        <Avatar {...avatar} className="mr-3" />
      </div>
    )}
    <div className="notification-body">
      <p className={emoji ? 'mb-1' : 'mb-0'} dangerouslySetInnerHTML={createMarkup(children)} />
      <span className="notification-time">
        {emoji && (
          <span className="mr-1" role="img" aria-label="Emoji">
            {emoji}
          </span>
        )}
        {time}
      </span>
      {request_status=='Pending' && (
        <span style={{margin: "260px"}}><button onClick={() => requestAction('accept',{from_id})}>Confirm</button> <button onClick={() => requestAction('reject',{from_id})}>Remove</button></span>
      )}
    </div>
  </Link>
);

Notification.propTypes = {
  to: PropTypes.string.isRequired,
  avatar: PropTypes.shape(Avatar.propTypes),
  time: PropTypes.string.isRequired,
  className: PropTypes.string,
  unread: PropTypes.bool,
  flush: PropTypes.bool,
  emoji: PropTypes.string,
  children: PropTypes.node,
  request_status: PropTypes.string,
  from_id:PropTypes.string
};

Notification.defaultProps = { unread: false, flush: false };

function redirectUserProfile(from_id){
   localStorage.setItem('selected_user_id',from_id.from_id);
}


function requestAction(type,from_id){
   console.log(from_id,'from_id');

   if(type=='accept'){
      var requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ default_user: localStorage.getItem('default_user'),accept_profile_value:from_id.from_id })
      };
    } else{
      var requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ default_user: localStorage.getItem('default_user'),reject_profile_value:from_id.from_id })
      };
    }
    
    fetch(config.API_URL()+'connections', requestOptions)
        .then(async response => {
            const data = await response.json();

            if(data.resultType=='F'){
              toast.error(data.msg);
            }else{
              toast.success(data.msg);
            }

            /* check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }

            this.setState({ postId: data.id });
            */

        })
        .catch(error => {
            //this.setState({ errorMessage: error });
            console.error('There was an error!', error);
        });
}

export default Notification;
