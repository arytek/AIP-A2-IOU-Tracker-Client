import React from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Components/Loader';
import RequestCard from '../Components/RequestCard';
import requestsData from "../requestsFakeData";
import RequestView from "../Components/RequestView";
import Requester from "../Components/Requester";


/**
 * React component broilerplate code. Refer to this component for guidance.
 * Component used to display the individual request page.
 */
function Request() {
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
    content =(
      <RequestView
        title = "Coffee"
      />
    );
    
    requestContent =(
      <Requester
        requester = "John"
      />  
    );
  }

  return (
    <div className="border mb-4 rounded overflow-hidden p-4">
      <div className="mx-auto w-full md:w-2/4">
        <div className="border mb-auto rounded overflow-hidden">
          {content}
        </div>
        <div Class = "px-16 p-3">
          {requestContent}
        </div>
      </div>
    </div>
  );
}
export default Request;
