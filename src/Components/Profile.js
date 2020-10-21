import React from 'react';
import CreateRequestForm from './CreateRequestForm';

/**
 * Component that renders the profile page of the user where they can manage
 * their existing favours and requests, plus other things.
 */
function Profile(props) {
  return (
    <div>
      <h1 className="text-2xl mb-1">Barry Hamilton</h1>
      <div className="font-light text-sm">@Barry</div>
      <div className="text text-center">
        <CreateRequestForm className="" 
          buttonName = "Create Request"
        />
      </div>
    </div>
  );
}
export default Profile;
