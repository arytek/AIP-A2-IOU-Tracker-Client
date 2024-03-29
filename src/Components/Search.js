import React, { useState } from 'react';
 import "./CSS/Search.css";

 //search bar layout
 function Search() {
  const [search, setSearch] = useState('');
  return (
    <div>
      {/* search input box */}
      <input 
        type="text"
        id="search"
        className="py-2 mb-3 border border-gray-900 rounded-lg px-2 w-64 padding-right-300"
        placeholder="Keywords..."
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />

      {/* dropdown list */}
      <div className="dropdown">
        <button className="border border-gray-900 py-2 text-left rounded-lg dropdown margin-left px-4">
          Reward Type
          <span className="px-4">
            <i className="arrow down"></i>
          </span>
        </button>
        <div className="dropdown-content">
          <p>hello</p>
        </div>
      </div>
      
      {/* search button */}
      <button
        // className="text mx-5 border border-gray-900 rounded-lg px-5 cursor-pointer"
        className="bg-blue-500 text-white py-2 justify-center rounded-lg margin-left px-6"
      >
        Search
      </button>
    </div>
  );
}

export default Search;
