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
        titles = "Coffee"
        authors = "Dave"
        dateCreateds = "24/9"
        status = "unfulfilled"
        request = "clean office fridge"

        reward = "Coffee"
        requester= "John"
        notes = "The office fridge is located on level 3 of building 2"
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
