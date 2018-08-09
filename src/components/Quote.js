import React from 'react';
import propTypes from 'prop-types';

const Quote = props => {
    const { content } = props;
    const { author } = props;
    
    return (
        <div className="software_quote py-5 mt-5">
            <h1 className="mx-3">{ content }</h1>
            <h4 className="my-3">{ author }</h4>
        </div>   
    );
};

Quote.defaultProps = {
    content: ' "The function of good software is to make the complex appear to be simple." ',
    author: "- Grady Booch"
};

Quote.propTypes = {
    heading: propTypes.string.isRequired
};

export default Quote;