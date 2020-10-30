import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUsers, FaUserAlt, FaUserPlus } from 'react-icons/fa';
import { AccountContext } from '../Contexts/Accounts';

function SideMenu() {
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
    <div className="w-auto border border-gray-500 rounded-lg mt-6 ml-32 p-4 flex flex-col float-left">
      <div className="text w-auto border-none rounded block">
        <Link to={`/`} className="inline-flex mx-5">
          <FaHome className="mr-6 text-2xl" />
          Home
        </Link>
      </div>
      <div className="w-auto border-none rounded block">
        <Link to={`/Leaderboard`} className="inline-flex mx-5">
          <FaUsers className="mr-6 text-2xl" />
          Leaderboard
        </Link>
      </div>

      {isLoggedIn ? (
        <div className="w-auto border-none rounded block">
          <Link to={`/profile`} className="inline-flex mx-5">
            <FaUserAlt className="mr-6 text-2xl" /> Profile
          </Link>
        </div>
      ) : (
        <div className="w-auto border-none rounded block">
          <Link to={`/signup`} className="inline-flex mx-5">
            <FaUserPlus className="mr-6 text-2xl" /> Sign Up
          </Link>
        </div>
      )}
    </div>
  );
}

export default SideMenu;
