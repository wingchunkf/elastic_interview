import React from 'react';
import propTypes from 'prop-types';

const Header = props => {
    const { heading } = props;
    const { subtitle } = props;

    return (
        <div className="header py-3">
            <h1>{ heading }</h1>
            <hr />
            <h4 className="mt-3">A high-level overview</h4>
        </div>   
    );
};

Header.defaultProps = {
    heading: "The Elastic Stack"
};

Header.propTypes = {
    heading: propTypes.string.isRequired
};

export default Header;

