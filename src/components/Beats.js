import React from 'react';
import propTypes from 'prop-types';

const Beats = props => {
    const { title } = props;    

    return (
        <div className="mt-4 pb-3">        
            <h1 className="pb-4">{ title }</h1>
            <hr />
            <p className="mt-5"></p>
            <p>Beats are open source data shippers that can transport data to Elasticsearch directly or through Logstash.</p>
            <p>There are seven different types of Beats and each performs a different function.</p>
            <p>If you don't see a Beat that meets your needs, simply build your own.</p>
            <p>Beats can each be installed separately so you only install what you need.</p>
        </div>   
    );
};

Beats.defaultProps = {
    title: "Beats"    
};

Beats.propTypes = {
    title: propTypes.string.isRequired,
};

export default Beats;