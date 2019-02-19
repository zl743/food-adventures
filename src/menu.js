import React, { Component } from 'react';
import data from './data/food.json';

function Menu(props) {
  return (
    <div className="col red darken-3 s12 m4 fullRowContent z-depth-3">
    {/* card html*/}
    {data.sort(function(a,b){
      var keyA = a.id;
      var keyB = b.id;
      console.log(keyA, keyB)
    }).map(card => { return(
      <div className="col s12" key={card.id}>
        <div className={card.type == 'restaurant' ? 'card horizontal' : 'card horizontal recipe amber lighten-5'}>

            <div className="card-stacked">
                  <div className="card-content">
                  <div className="date grey-text">{card.date}</div>
                  <h6>{card.name}</h6>
                  <p>{card.cuisine} - <span className="orange-text darken-4">{card.finalscore}</span> <br/>{card.address}</p>
                  </div>
                  <div className="card-action">
                    <a id="Noreetuh" href="#" onClick={() => props.handleClick(card.name, card.descriptions, card.ratings, card.ratings2)}>View</a>
                    <a href={card.link} target="_blank">{card.type == 'restaurant' ? 'Menu' : 'Recipe'}</a>
                  </div>
            </div>
        </div>
      </div>
    )})}
    {/*end card html*/}
  </div>
  );
}

export default Menu;
