import React from 'react';
import './search-box.style.css';

const SearchBox = ({ placeholder, handleChange }) => {
    return (
        <div className="search-box-container">
            <input onChange={handleChange} type="search" placeholder={placeholder} className="search" />
        </div>
    );
}

export default SearchBox;