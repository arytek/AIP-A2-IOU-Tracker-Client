import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { FaSignInAlt } from 'react-icons/fa';

function SideMenu() {
  return (
    <div className="text w-auto border border-gray-500 rounded-lg mt-6 ml-32 p-4 flex flex-col float-left">
      <div className="text w-auto border-none rounded block">
        <Link to={`/`} className="inline-flex mx-5">
          <FaHome className="mr-6 text-2xl" />
          Home
        </Link>
      </div>
      <div className="text w-auto border-none rounded block">
        <Link to={`/Leaderboard`} className="inline-flex mx-5">
          <FaUsers className="mr-6 text-2xl" />
          Leaderboard
        </Link>
      </div>
      <div className="text w-auto border-none rounded block">
        <Link to={`/profile`} className="inline-flex mx-5">
          <FaUserAlt className="mr-6 text-2xl" /> Profile
        </Link>
      </div>
      <div className="text w-auto border-none rounded block">
        <Link to={`/`} className="inline-flex mx-5">
          <FaSignInAlt className="mr-6 text-2xl" /> Sign In
        </Link>
      </div>
    </div>
  );
}

export default SideMenu;
