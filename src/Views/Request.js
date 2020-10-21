import React from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Components/Loader';
import RequestCard from '../Components/RequestCard';
import requestsData from '../requestsFakeData';
import RequestView from '../Components/RequestView';
import Requester from '../Components/Requester';
import requests from '../requestsFakeData';
import ContributeRewardContainer from '../Components/ContributeReward/ContributeRewardContainer';

/**
 * React component broilerplate code. Refer to this component for guidance.
 * Component used to display the individual request page.
 */

 function Request() {
  let storageData = localStorage.getItem('request');
  let currentRequest = storageData.split(',');

  //get contributeReward data from local storage
  let setRewards = [];
  setRewards.push(currentRequest[1]);
  setRewards.push(localStorage.getItem('ContributeReward'));

  const { id } = useParams();

  let request = requestsData;
  let content = null;
  let requestContent = null;
  if (request.error) {
    content = <p>There was an error please refresh or try again later.</p>;
  }
  if (request.loading) {
    content = <Loader></Loader>;
  }

  if (request) {
    content = (
      <RequestView
        titles={currentRequest[1]}
        authors={currentRequest[2]}
        dateCreateds={currentRequest[3]}
        status={currentRequest[4]}
        request={currentRequest[5]}
        reward={
          setRewards.map((item) => (
              <div>
                {item}: rewarded by @{currentRequest[7]}
              </div>
          ))
        }
        notes={currentRequest[6]}
        contributeButton={
          <div className="text text-center">
            <ContributeRewardContainer className="" 
              buttonName = "Contribute a reward"
            />
          </div>
        }
      />
    );
  }

  return (
    <div className="mb-4 rounded-lg overflow-hidden m-4 width: auto;">
      {content}
      
    </div>
    
  );
}
export default Request;
