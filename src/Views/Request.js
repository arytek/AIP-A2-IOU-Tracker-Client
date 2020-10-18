import React from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Components/Loader';
import RequestCard from '../Components/RequestCard';
import requestsData from "../requestsFakeData";
import RequestView from "../Components/RequestView";
import Requester from "../Components/Requester";
import requests from '../requestsFakeData';


/**
 * React component broilerplate code. Refer to this component for guidance.
 * Component used to display the individual request page.
 */



function Request() {
let storageData = localStorage.getItem("request");
let currentRequest = storageData.split(",")

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
        titles = {currentRequest[1]}
        authors = {currentRequest[2]}
        dateCreateds = {currentRequest[3]}
        status = {currentRequest[4]}
        request = {currentRequest[5]}

        reward = {currentRequest[1]}
        rewarders= {currentRequest[7]}
        notes = {currentRequest[6]}
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
