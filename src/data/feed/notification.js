import $ from 'jquery';
import config from '../../helpers/config';

var notifications = [];
$.ajax({
        url: config.API_URL()+'connections/getallconnection',
        type: 'POST',       
        async:false,
        data: {
        'default_user': localStorage.getItem('default_user'),
        'page': 0
        },
        success: function(response) {
          if(response.data==undefined){
            console.log('something went wrong!');
          }else{
            notifications = response.result.notification_data;
          }
      }
});

export default notifications;
