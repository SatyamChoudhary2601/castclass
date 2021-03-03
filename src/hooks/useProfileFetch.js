import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import config from '../helpers/config';

const useProfileFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  let isMounted = true;
  let url = config.API_URL() + 'post/getprofileinfo';

  useEffect(() => {
    let url = config.API_URL() + 'profilenew/35542?default_user=' + localStorage.getItem('default_user');
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setProfileinfo(data.result.data)
        setLoading(false)
      });
    return () => (isMounted = false);
  }, [data, waitingTime]);

  return { loading, setLoading, data, setData };
};

export default useProfileFetch;
