import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Search.css';

function Search() {
  const [search, setSearch] = useState('');

  return (
    <div>
      <input
        className="search border rounded"
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
        className="text mx-5 border border-gray-900 rounded px-5 cursor-pointer"
      >
        Search
      </Link>
    </div>
  );
}

export default Search;
