import React from 'react';
import { Button } from 'reactstrap';
import ItemBanner from '../item/ItemBanner';
import g from '../../assets/img/logos/g.png';
import hp from '../../assets/img/logos/hp.png';
import team2 from '../../assets/img/team/2.jpg';
import generic4 from '../../assets/img/generic/4.jpg';
import apple from '../../assets/img/logos/apple.png';
import config from './../../helpers/config';
import $ from 'jquery';
import { toast } from 'react-toastify';
import Modal from 'react-modal';
import Popup from "reactjs-popup";

const handleMessage = e => {
  e.preventDefault();
} 

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '500px'
  }
};

const handleConnect = e => {
  e.preventDefault();
  
  $.ajax({
    url: config.API_URL()+'connections',
    type: 'POST',
    data: {
        'connect_profile_value': localStorage.getItem('selected_user_id'),
        'default_user': localStorage.getItem('default_user')
    },
    cache: false,
    success: function(data) {
      console.log(data);
      
      if(data.resultType=='F'){
        toast.error(data.msg);
      }else{
        toast.success(data.msg);
      }

  }.bind(this),
    error: function(xhr, status, err) {
        toast.error(xhr.responseText);
    }.bind(this)
});
}

const ProfileBanner = () => {
  var button = false;
  if(localStorage.getItem('selected_user_id') != localStorage.getItem("user_id")){
    button = true;
  }

  console.log(button,'button');

  var connect = '';
  var profile = '';
  $.ajax({
      url: config.API_URL()+'connections/checkIfConnected',
      type: 'POST',
      data: {
          'from_id': localStorage.getItem('selected_user_id'),
          'to_id': localStorage.getItem('user_id')
      },
      cache: false,
      async:false,
      success: function(data) {   
        if(data.result.data=='Connected'){
          connect = 'Connected';
        }
        
        connect = data.result.data;
        profile = data.result.profile;
        //console.log('profile',profile);
      }
  })

  console.log(button,'button','connect',connect);

  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);

  function openModal(e) {
    e.preventDefault();
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#63a9dc';
  }

  function closeModal(){
    setIsOpen(false);
  }

  function sendMessage(){
    $.ajax({
      url: config.API_URL()+'message',
      type: 'POST',
      data: {
          'from_id': localStorage.getItem('user_id'),
          'to_id': localStorage.getItem('selected_user_id'),
          'subject': $('#subject').val(),
          'message': $('#message').val()
      },
      cache: false,
      success: function(data) {
        //console.log(data);
        
        if(data.resultType=='F'){
          toast.error(data.msg);
        }else{
          closeModal();
          toast.success(data.msg);
        }
  
    }.bind(this),
      error: function(xhr, status, err) {
          toast.error(xhr.responseText);
      }.bind(this)
    });
  }

    return (
  <ItemBanner>
    <ItemBanner.Header avatarSrc={team2} coverSrc={generic4} />
    <ItemBanner.Body
      name={profile.user_l_name}
      verified
      headline={profile.profile_heading}
      location="New York, USA"
      noOfFollowers={330}
      previousJobs={[
        { institution: 'Google', src: g },
        { institution: 'Apple', src: apple },
        { institution: 'Hewlett Packard', src: hp }
      ]}
    >
    
    {(() => {
        if(button){
          return (
            <div>
              <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >

                <h4 ref={_subtitle => (subtitle = _subtitle)}>Send Message</h4>
                <div>
                  <input type ="text" name="subject" id="subject" class="subject" /><br/><br/>
                  <textarea name="message" id="message" class="message" placeholder="Write your message..."></textarea>
                </div>
                <button onClick={closeModal}>close</button>&nbsp;&nbsp;
                <button onClick={sendMessage}>Send</button>
              </Modal>
            </div>
          )
        }
      })()}  

      {(() => {
        if(button && connect!="Connected"){
          return (
          <Button onClick={handleConnect} color="falcon-primary" size="sm" className="px-3">
            Connect
          </Button>
          )
       }
      })()}

       {(() => {
        if(button && connect=="Connected"){
          return (  
            <Button color="falcon-primary" size="sm" className="px-3">
            Connected
          </Button>
       )
       }
      })()}
         
      <Button onClick={openModal} color="falcon-default" size="sm" className="px-3 ml-2">
        Message
      </Button>
    </ItemBanner.Body>
  </ItemBanner>
  );
};

export default ProfileBanner;
