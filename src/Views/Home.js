import React from 'react';
import RequestCard from '../Components/RequestCard';
import requestsData from '../requestsTestData';
import Search from '../Components/Search';
import Loader from '../Components/Loader';

/**
 * Component used to display the home page.
 */
function Home() {
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
    <div className="mb-4 rounded-lg overflow-hidden m-4 width: auto; mr-48 max-w-2xl ml-16">
      <div>
        <h1 className="font-sans text-2xl text-left mb-4">Requests</h1>
        <Search />
        {content}
      </div>
    </div>
  );
}
export default Home;
