import React, { Component } from 'react';

const searchStyle = {
    color: '#017F75'    
}

const SearchIcon = () => {

    return (
            <div className="icons text-center col-lg-2 mt-5">
                <h1><i className="fas fa-search fa-2x" style={ searchStyle }></i></h1>
            </div>
            );
        }; 

export default SearchIcon;