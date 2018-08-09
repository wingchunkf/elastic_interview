import React from 'react';
import propTypes from 'prop-types';

const ESprep = props => {
    const { title } = props;
    
    return (
        <div className="features col-lg-4 mx-lg-auto ml-4 mt-5">     
            <h1 className="mb-5">{ title }</h1>    
            <hr />      
            <p className="pt-4">Elasticsearch is an open source, distributed, near real time search and analytics engine
            with features that make scaling fast and easy.</p>                    
            <p>Offers federated indexing so multiple resources can be searched simultaneously.</p>
            <p>Indexes (document collections) are divided into shards, then replicated. 
            If a primary shard fails, its replica is available to complete the operation.</p>
            <p>Shards are balanced across all nodes in a cluster for evenly distributed indexing and search load.</p>
        </div>       
    );
};

ESprep.defaultProps = {
    title: 'Exploring Elasticsearch'     
};

ESprep.propTypes = {
    title: propTypes.string.isRequired    
};

export default ESprep;