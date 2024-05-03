import React from 'react'


function SearchBar({searchTerm, setSearchTerm}) {
  return (<div>
      <input
        //id="search-input"
        type="text"
        placeholder="Search your Recent Transcations"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
    </div>
  );
}

export default SearchBar;