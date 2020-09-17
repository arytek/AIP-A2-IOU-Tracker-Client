import React, { useState, useContext } from 'react';
import { useTransition, animated } from 'react-spring';
import Login from './Login';
import { AccountContext } from '../../Contexts/Accounts';

/**
 * Component for rendering the login prompt.
 * To be used with header.js.
 *
 * TODO: Refactor so that it renders just the form, rather than a button.
 *
 */
function LoginFormContainer() {
  const [showForm, setShowForm] = useState(false);
  const { authenticate } = useContext(AccountContext);

  const loginUser = (username, password) => {
    authenticate(username, password)
      .then((data) => {
        console.log('Logged in!', data);
        setShowForm(false);
        window.location.href = '/';
      })
      .catch((err) => {
        console.error('Failed to login!', err);
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
      {/* Remove this span later, as mentioned above. */}
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
