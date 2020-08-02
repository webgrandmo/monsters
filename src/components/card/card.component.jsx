import React from 'react';
import './card.style.css';

const Сard = (props) => {
    return(
        <div className="card-container">
            <img src={`https://robohash.org/${props.monster.id}?set=set2`} alt={props.monster.name}/>
            <h3>{props.monster.name}</h3>
            <p>{props.monster.email}</p>
        </div>
    )
}

export default Сard;