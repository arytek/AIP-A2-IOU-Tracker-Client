import React from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Components/Loader';
import requestsData from "../requestsFakeData";

/**
 * React component broilerplate code. Refer to this component for guidance.
 * Component used to display the individual request page.
 */
function Request() {
  const { id } = useParams();
  const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/requests/${id}`;

  let request = requestsData;

  let content = null;

  if (request.error) {
    content = <p>There was an error please refresh or try again later.</p>;
  }

  if (request.loading) {
    content = <Loader></Loader>;
  }

  if (request.data) {
    content = (
      <div>
        <h1 className="text-2xl font-bold mb-3">{request.data.name}</h1>
        <div>
          <img src={request.data.images[0].imageUrl} alt={request.data.name} />
        </div>
        <div className="font-bold text-xl mb-3">$ {request.data.price}</div>
        <div>{request.data.description}</div>
      </div>
    );
  }

  return (
    <div>
      <h1>{content}</h1>
    </div>
  );
}
export default Request;
