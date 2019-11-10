import React, { useState } from 'react';
import PropTypes from 'prop-types';

import '../assets/Search.css';

const Search = (props) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInputChanges = (event) => {
    setSearchValue(event.target.value);
  };

  const resetInputField = () => {
    setSearchValue('');
  };

  const callSearchFunction = (event) => {
    event.preventDefault();
    props.search(searchValue);
    resetInputField();
  };

  return (
    <form className="search">
      <input
        className="search-input"
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />
      <input className="search-button" onClick={callSearchFunction} type="submit" value="SEARCH" />
    </form>
  );
};

Search.propTypes = {
  search: PropTypes.func.isRequired,
};

export default Search;
