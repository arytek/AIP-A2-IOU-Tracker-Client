import React from 'react';
import Loader from '../Components/Loader';
import RequestCard from '../Components/RequestCard';
import requestsData from '../requestsFakeData';
import Search from '../Components/Search';
import SideMenu from '../Components/SideMenu';

/**
 * Component used to display the home page.
 * TODO: Refactor so that it displays a list of requests.
 */
function Home() {
  const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/requests/?page=1&limit=10`;

  let requests = requestsData;
  let content = null;

  if (requests.error) {
    content = <p>There was an error please refresh or try again later.</p>;
  }

  if (requests.loading) {
    content = <Loader></Loader>;
  }

  if (requests) {
    content = requests.map((request) => (
      <div key={request.id}>
        <RequestCard request={request} />
      </div>
    ));
  }

  return (
    <div>
      <div>
        <h1 className="text-2xl mb-3">Requests</h1>
        <Search />
        {content}
      </div>
    </div>
  );
}
export default Home;
