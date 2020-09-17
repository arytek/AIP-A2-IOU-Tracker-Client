import React, { useContext, useEffect, useState } from 'react';
import Navigation from './Navigation';
import LoginFormContainer from './LoginFormContainer/LoginFormContainer';
import { AccountContext } from '../Contexts/Accounts';

function Header() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const { getSession, logout } = useContext(AccountContext);

  useEffect(() => {
    getSession().then((session) => {
      console.log('Session:', session);
      setLoggedIn(true);
    });
  });

  return (
    <header className="border-b p-3 flex justify-between items-center">
      <span className="font-bold">AppName</span>
      <div className="flex justify-between items-center">
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
