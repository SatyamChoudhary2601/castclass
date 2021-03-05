import React,{useEffect} from 'react'
import axios from 'axios'

const DeleteCompany = (props) => {
	console.log(props,"this is props for the delete")
let bodyFormData = new FormData();

useEffect(() => {
	


    bodyFormData.append('default_user', localStorage.getItem('default_user'));
    bodyFormData.append('company_id', props.location.state.data.id);

    axios({
    method: 'post',
    url: 'http://139.59.35.110/castclass/api/v2/companies/delete',
    data: bodyFormData,
    headers: {'Content-Type': 'multipart/form-data' }
    })
    .then(function (response) {
        //handle success
        // console.log(response);
        if(response.data.msg){
        console.log(response);


  

  }
    })
    .catch(function (response) {
        //handle error 
        console.log(response);
    });
  

},[props])
	return(
		<div>delete</div>
		)
}
export default DeleteCompany