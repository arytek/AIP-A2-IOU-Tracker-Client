import React, { useContext, useEffect, useState } from 'react';
import Navigation from './Navigation';
import LoginFormContainer from './LoginFormContainer/LoginFormContainer';
import { AccountContext } from '../Contexts/Accounts';

/**
 * Header component that is always visible at the top of the viewport.
 *
 */
function Header() {
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

  return (
    <header className="border-b p-3 flex justify-between items-center">
      <span className="font-bold">Favoura</span>
      <div className="flex justify-between items-center">
        {/* If isLoggedIn, render a logout button, else render a login button */}
        {/* TODO: Also render a 'Profile' button is isLoggedIn */}
        {isLoggedIn ? (
          <button
            onClick={logout}
            className="text mx-5 border border-gray-900 rounded px-4 p-1 cursor-pointer"
          >
            Logout
          </button>
        ) : (
          <LoginFormContainer />
        )}

        <Navigation />
      </div>
    </header>
  );
}

export default Header;
