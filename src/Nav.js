import React, { Component } from 'react';

function Nav(props) {

    return(
      <div className="col red accent-4 s12 m4 navbar-fixed valign-wrapper z-depth-3">
        <ul class="right tabs tabs-transparent">
            <li class="tab right"><a href="#" id="tab-date" onClick={() => props.activeToggle('date', 'filter', 'tab-date')}>Date</a></li>
            <li class="tab right"><a href="#" id="tab-abc" onClick={() => props.activeToggle('abc', 'filter', 'tab-abc')}>A-Z</a></li>
            <li class="tab right"><a href="#" id="tab-restaurants" onClick={() => props.activeToggle('restaurants', 'type', 'tab-restaurants')}>Restaurants</a></li>
            <li class="tab right"><a href="#" id="tab-recipes" onClick={() => props.activeToggle('recipes', 'type', 'tab-recipes')}>Recipes</a></li>
          </ul>
      </div>

    )
}
export default Nav;
