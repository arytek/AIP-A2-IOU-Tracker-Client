import React from 'react';
import { Link } from 'react-router-dom';
import requests from '../requestsFakeData';
import request from '../Views/Request';

function StoreIdInLocalStorage(
  id,
  title,
  author,
  dateCreated,
  status,
  description,
  location,
  rewarders
) {
  // store values in request array
  let request = [
    id,
    title,
    author,
    dateCreated,
    status,
    description,
    location,
    rewarders,
  ];
  // store to local storage
  localStorage.setItem('request', request);
}

//requests on main page layout
function RequestCard(props) {
  return (
    <div className="border mb-4 overflow-hidden rounded-lg p-3">
      <div className="mb-3 flex justify-start">
        <div className="pl-2">
          <h3 className="font-bold text-xl text-left">{props.request.title}</h3>
          <div className="font-light text-xs text-left">
            Added by {props.request.author} {props.request.dateCreated} - status{' '}
            {props.request.status}
          </div>
        </div>
      </div>
      <hr className="w-100 mb-3" />
      <div className="flex justify-end w-full">
        <div
          className="flex-grow italic text-sm font-bold text-left"
          style={{ color: '#93939f' }}
        >
          {props.request.description}
          <p style={{ color: '#6c6c7a' }}>
            @{props.request.rewarders} rewarding this
          </p>
        </div>

        <Link
          //link to request view page using request id according to the request that was clicked on
          to={`/requests/${props.request.id}`}
          className="bg-blue-500 text-white p-2 flex justify-center w-24 rounded-lg"
          // onclick store value to storeIdInLocalStorage function
          onClick={() =>
            StoreIdInLocalStorage(
              props.request.id,
              props.request.title,
              props.request.author,
              props.request.dateCreated,
              props.request.status,
              props.request.description,
              props.request.location,
              props.request.rewarders
            )
          }
        >
          View
        </Link>
      </div>
    </div>
  );
}
export default RequestCard;
