import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { FaSignInAlt } from 'react-icons/fa';

function SideMenu() {
  return (
    <div className="text w-40 border border-gray-500 rounded px-3 flex-box ">
      <div className="text w-40 border-none rounded block">
        <Link to={`/`} className="text inline-flex mx-5">
          <FaHome />
          Home
        </Link>
      </div>
      <div className="text  w-40 border-none rounded block">
        <Link to={`/Leaderboard`} className="text inline-flex mx-5">
          <FaUsers />
          Leaderboard
        </Link>
      </div>
      <div className="text  w-40 border-none rounded block">
        <Link to={`/profile`} className="text inline-flex mx-5">
          <FaUserAlt /> Profile
        </Link>
      </div>
      <div className="text  w-40 border-none rounded block">
        <Link to={`/`} className="text inline-flex mx-5">
          <FaSignInAlt /> Signin
        </Link>
      </div>
    </div>
  );
}

export default SideMenu;
