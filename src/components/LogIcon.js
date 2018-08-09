import React, { Component } from 'react';

const logStyle = {
    color: '#DD0A73',
    marginLeft: '10px' 
}

const LogIcon = () => {

        return (
            <div className="icons text-center col-lg-2 mt-5">
                <h1><i className="far fa-file-alt fa-2x" style={ logStyle }></i></h1>
            </div>
            );    
        };

export default LogIcon;