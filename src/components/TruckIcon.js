import React, { Component } from 'react';

const truckStyle = {
    color: '#909AA1'    
}

const TruckIcon = () => {

    return (
            <div className="icons text-center col-lg-2 mt-5">
                <h1><i className="fas fa-truck-moving fa-2x" style={ truckStyle }></i></h1>
            </div>
            );
        }; 

export default TruckIcon;