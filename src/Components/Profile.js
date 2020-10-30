import React, { useContext, useEffect, useState } from 'react';
import CreateRequestForm from './CreateRequestForm';
import CreateFavourForm from './CreateFavourForm';
import { AccountContext } from '../Contexts/Accounts';
import Loader from '../Components/Loader';
import { useAxios } from '../Hooks/HttpRequestMainServer';

/**
 * Component that renders the profile page of the user where they can manage
 * their existing favours and requests, plus other things.
 */
function Profile(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const { getSession, logout } = useContext(AccountContext);

  // Check if a user login session exists.
  useEffect(() => {
    getSession()
      .then(() => {
        setLoggedIn(true);
      })
      .catch(() => {
        setLoggedIn(false);
      });
  });

  let httpRequest = useAxios('userData', 'post', undefined, undefined);
  let content = null;

  if (httpRequest.error) {
    content = <p>There was an error please refresh or try again later.</p>;
  }

  if (httpRequest.loading) {
    content = <Loader></Loader>;
  }
  console.log(httpRequest.data);
  if (httpRequest.data) {
    content = (
      <div className="text-center m-6 mx-auto w-full max-w-2xl">
        <h1 className="font-sans text-2xl text-left mb-4">
          {httpRequest.data[0].name}
        </h1>
        <div className="font-light text-sm text-left">
          @ {httpRequest.data[0].username}
        </div>
        <hr className="my-2" />
        <div className="flex justify-center my-10">
          <CreateRequestForm
            className=""
            buttonName="Create Request"
            auth_uuid={httpRequest.data[0].auth_uuid}
          />
          <CreateFavourForm className="" buttonName="Create Favour" />
        </div>
        <h1 className="font-sans text-xl text-left my-4">My Requests</h1>

        <h1 className="font-sans text-xl text-left my-4">My Favours</h1>
      </div>
    );
  }

  return (
    <div>
      <div>{content}</div>
    </div>
  );
}
export default Profile;
