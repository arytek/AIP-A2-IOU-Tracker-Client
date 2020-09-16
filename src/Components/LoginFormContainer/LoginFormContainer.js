import React, { useState } from 'react';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import UserPool from '../../Utility/UserPool';
import { useTransition, animated } from 'react-spring';
import Login from './Login';

function LoginFormContainer() {
  const [showForm, setShowForm] = useState(false);

  const loginUser = (username, password) => {
    const user = new CognitoUser({
      Username: username,
      Pool: UserPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: username,
      Password: password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        console.log('onSuccess:', data);
      },
      onFailure: (err) => {
        console.log('onFailure:', err);
      },
      newPasswordRequired: (data) => {
        console.log('newPasswordRequired:', data);
      },
    });
  };

  const maskTransitions = useTransition(showForm, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const menuTransitions = useTransition(showForm, null, {
    from: { opacity: 0, transform: 'translateY(-100%)' },
    enter: { opacity: 1, transform: 'translateY(0%)' },
    leave: { opacity: 0, transform: 'translateY(-100%)' },
  });

  return (
    <div>
      <span
        className="text mx-5 border border-gray-900 rounded px-4 p-1 cursor-pointer"
        onClick={() => setShowForm(!showForm)}
      >
        Login
      </span>

      {maskTransitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={props}
              className="overlay--black"
              onClick={() => setShowForm(false)}
            ></animated.div>
          )
      )}

      {menuTransitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={props}
              className="fixed bg-white top-0 left-0 right-0 mx-auto w-full max-w-lg z-50 shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              <Login
                loginUser={loginUser}
                closeMenu={() => setShowForm(false)}
              />
            </animated.div>
          )
      )}
    </div>
  );
}

export default LoginFormContainer;
