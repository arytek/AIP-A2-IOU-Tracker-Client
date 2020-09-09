import React from 'react';
import Navigation from './Navigation';
import LoginFormContainer from './LoginFormContainer/LoginFormContainer';

function Header() {
  return (
    <header className="border-b p-3 flex justify-between items-center">
      <span className="font-bold">AppName</span>
      <div className="flex justify-between items-center">
        <LoginFormContainer />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
