import React, { Component } from 'react';
import Card from './Card';

class Cards extends Component {
    state = {
            cards: [
                {
                    id: 1,
                    product: 'Elasticsearch'                    
                },
                {
                    id: 2,
                    product: 'Kibana'                    
                },
                {
                    id: 3,                   
                    product: 'Logstash'                    
                },
                {
                    id: 4,
                    product: 'Beats'                   
                }
            ]
        };
    
    render() {

        const { cards } = this.state;
        // destructuring - not setting state but pulling it out
        return (
            <div className="row d-flex justify-content-center text-center">                            
                {cards.map(card => (
                    <Card
                        key={card.id}                        
                        card={card}
                    />
                ))}                
            </div>
        )
    }
}

export default Cards;