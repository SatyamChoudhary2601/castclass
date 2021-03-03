import logoG from '../../assets/img/logos/g.png';
import logoApple from '../../assets/img/logos/apple.png';
import logoNike from '../../assets/img/logos/nike.png';
import { getDuration } from '../../helpers/utils';
import moment from 'moment';
import $ from 'jquery';
import config from './../../helpers/config';

var experiances = [];
$.ajax({
        url: config.API_URL()+'post/getallexperiances',
        type: 'POST',       
        async:false,
        data: {
          'default_user': localStorage.getItem('default_user')
        },
        success: function(response) {
          if(response.data==undefined){
            console.log('something went wrong!');
          }else{
            experiances = response.data;
          }
      }
});

export default experiances;