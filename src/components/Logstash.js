import React from 'react';
import propTypes from 'prop-types';

const Logstash = props => {
    const { title } = props;    

    return (
        <div className="mt-3 py-5">        
            <h1 className="pb-4">{ title }</h1>
            <hr />
            <p className="mt-5"></p>
            <p>Logstash is a data collection engine that can collect and unite similar data from different sources.</p>
            <p>It also normalizes data and prepares it for analysis.</p>
            <p>Just like Elasticsearch, Logstash is fully scalable.</p>
            <p>Choose from over 200 plugins or make your own.</p>
        </div>   
    );
};

Logstash.defaultProps = {
    title: "Logstash"    
};

Logstash.propTypes = {
    title: propTypes.string.isRequired,   
};

export default Logstash;