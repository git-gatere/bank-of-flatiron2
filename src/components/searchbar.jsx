import React from "react";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div>
      <input
        id="searchBar"
        type="text"
        placeholder="Search your Recent Transactions"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
