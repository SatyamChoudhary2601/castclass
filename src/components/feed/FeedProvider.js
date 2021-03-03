import React, { useReducer, useEffect } from 'react';
import { FeedContext } from '../../context/Context';
import { arrayReducer } from '../../reducers/arrayReducer';
import rawFeeds from '../../data/feed/feeds';
import { toast } from 'react-toastify';
import config from '../../helpers/config';

const FeedProvider = ({ children }) => {
  const [feeds, feedDispatch] = useReducer(arrayReducer, []);
  // const { feedDispatch } = useContext(FeedContext);

  useEffect(() => {
    fetch(config.API_URL() + 'getallpost', {
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(
        (result) => {
          if (result.resultType == "S") {
            toast.success(result.msg);
            console.log("fetch api result" + JSON.stringify(result));
            result = result?.result?.data;
            // feeds(result);
            // debugger
            feedDispatch({ type: 'ADD_MULTIPLE', payload: result, isAddToStart: true });
          } else {
            toast.error(result.msg);
          }
        },

        (error) => {
          toast.error("Error, Please try Again");

        }
      )

  }, []);

  console.log(feeds);

  return <FeedContext.Provider value={{ feeds, feedDispatch }}>{children}</FeedContext.Provider>;
};

export default FeedProvider;
