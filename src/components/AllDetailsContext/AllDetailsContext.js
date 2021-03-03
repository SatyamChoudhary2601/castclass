import React, {useState,createContext,useEffect} from 'react'
import config from "../../helpers/config";
import axios from 'axios'


export const AllDetailsContext = createContext();

export const UserDetailProvider = (props) => {
	const [userData, setUserData] = useState(null)
	const [companyData, setCompanyData] = useState(null)
	
	useEffect(() => {
    axios
      .get(config.API_URL() + "profile"+"/"+localStorage.getItem("user_profile_id")+"?"+"default_user="+localStorage.getItem('default_user'))
      .then((res) => setUserData(res?.data.result.data));
  }, []);

	useEffect(() => {
    axios
      .get(config.API_URL() + "recruiters"+"?"+"default_user="+localStorage.getItem('default_user'))
      .then((res) => setCompanyData(res?.data.result.data));
  }, []);
	
	// ?limit=10&offset=0&recruitement_company=0&default_user

	return(
			<AllDetailsContext.Provider value={{userData, setUserData, companyData, setCompanyData}}>
				{props.children}
			</AllDetailsContext.Provider>
		)
} 
