import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {

  render() {

  const { card } = this.props;

    return (        
        <div className="text-center col-lg-6 mt-lg-5">     
          <h1 className="card-title">{ card.product }</h1>     
      </div>   
    )
  }
}

Card.propTypes = {
  product: PropTypes.string.isRequired
};

export default Card;

