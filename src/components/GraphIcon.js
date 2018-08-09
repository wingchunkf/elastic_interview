import React, { Component } from 'react';

const graphStyle = {
    color: '#0079A5'
};

const GraphIcon = () => {  

        return (

            <div className="icons text-center col-lg-2 mt-5">
                <h1><i className="fas fa-chart-bar fa-2x" style={ graphStyle }></i></h1>
            </div>
            ); 
        };

export default GraphIcon;