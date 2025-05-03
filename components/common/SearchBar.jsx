import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setSearchInput(value);
    onSearch(value); // Pass the search input to the parent component
  };

  return (
    <div className="search-container">
      <input
        type="search"
        placeholder="Pesquisar conteúdo egípcio..."
        onChange={handleChange}
        value={searchInput}
        className="search-input"
      />
      <div className="search-icon">
        <span>🔍</span>
      </div>
    </div>
  );
};

export default SearchBar;
