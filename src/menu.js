import React, { Component } from 'react';
import data from './data/food.json';

function Menu(props) {
  return (
    <div>
    <div className="col red accent-4 s12 m4 navbar-fixed valign-wrapper z-depth-3">
    <ul class="tabs tabs-transparent">
        <li class="tab"><a>Date</a></li>
        <li class="tab"><a>A-Z</a></li>
        <li class="tab"><a>Restaurants</a></li>
        <li class="tab"><a>Recipes</a></li>
      </ul>
    </div>
    <div className="col red lighten-1 s12 m4 fullRowContent z-depth-3">

    {/* card html*/}
    {data.sort(function(a,b){
      var keyA = a.id;
      var keyB = b.id;
      //console.log(keyA, keyB);
      if(keyA < keyB) return -1;
      if(keyA > keyB) return 1;
      return 0;
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
  </div>
  );
}

export default Menu;
