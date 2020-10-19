import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Search.css';

function Search() {
  const [search, setSearch] = useState('');

  return (
    <div className="flex flex-row h-auto flex-start my-5">
      <input
        className="flex-auto border-gray-500 border rounded-lg mr-6 py-2 px-5 w-9/12"
        type="text"
        id="search"
        placeholder="Search"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <Link
        to={`/products/${search}`}
        className="flex-auto border-gray-900 border rounded-lg py-2 px-5 cursor-pointer text-center"
      >
        Search
      </Link>
    </div>
  );
}

export default Search;
