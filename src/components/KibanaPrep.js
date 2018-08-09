import React from 'react';
import propTypes from 'prop-types';

const KibanaPrep = props => {
    const { title } = props;
   
    return (
        <div className="features col-lg-4 mx-auto mt-5">        
            <h1 className="mb-5">{ title }</h1>
            <hr />        
            <p className="mt-5">Kibana is an analytics and visualization software built for Elasticsearch.</p>
            <p>It allows you to search and filter your data then visualize the results.</p>
            <p>How your data is visualized is your choice, with a wide variety of graphs, tables, charts, and maps to choose from.</p>
            <p>Kibana allows you to create your own custom dashboard that shows changes in data in real time.</p>
        </div>   
    );
};

KibanaPrep.defaultProps = {
    title: "Exploring Kibana"    
};

KibanaPrep.propTypes = {
    title: propTypes.string.isRequired
};

export default KibanaPrep;