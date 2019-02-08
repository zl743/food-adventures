import React, { Component } from 'react';

function Menu(props) {
  var names = ['Noreetuh','The Halal Guys']
  var ratings = {
    Noreetuh: '★★★★★',
    HalalGuys: '★★★★'
  }
  var descriptions = {
    Noreetuh : 'This place was awesome. I was skeptical at first because I didn\'t want to overload on pork dishes, but I ended up getting the pork katsu for an appetizer and pork belly tortellini as my starter anyways. I don\'t even know if that was a mistake, because everything was so good. This place had some of the best pasta I\'ve ever had. A 3 course meal for $42 honestly isn\'t too bad when you consider the quality of each dish and the generous portions in the appetizer. I had a pork katsu to start, which wasn\'t anything amazing but was cooked perfectly.\n The main star of the show was the luau leaf pork belly tortellini in a coconut broth, served with shrimp and clams. For dessert, I shared an upside down pineapple cake served with scoops of vanilla, pineapple, and coconut ice cream.',
    HalalGuys : 'Halal Guys description here'
  }

  return (
    <div className="col red darken-3 s12 m4 fullRowContent z-depth-3">
    {/* card html*/}
      <div className="col s12">
        <div className="card horizontal">

            <div className="card-stacked">
                  <div className="card-content">
                  <div className="date grey-text">February 3, 2019</div>
                  <h6>Noreetuh</h6>
                  <p>Hawaiian - <span className="amber-text">★★★★★</span> <br/>128 1st Avenue, New York, NY 10009</p>
                  </div>
                  <div className="card-action">
                    <a id="Noreetuh" href="#" onClick={() => props.handleClick(names[0], descriptions.Noreetuh, ratings.Noreetuh)}>View</a>
                    <a href="http://www.noreetuh.com/menu/" target="_blank">Menu</a>
                  </div>
            </div>
        </div>
      </div>
    {/*}end card html*/}
    <div className="col s12">
      <div className="card horizontal">

          <div className="card-stacked">
                <div className="card-content">
                                <div className="date grey-text">February 8, 2019</div>
                <h6>The Halal Guys</h6>
                <p>Middle Eastern - <span className="amber-text">★★★★</span> <br/>307 E 14th St, New York, NY 10003</p>

                </div>
                <div className="card-action">
                  <a id="HalalGuys" href="#" onClick={() => props.handleClick(names[1], descriptions.HalalGuys, ratings.HalalGuys)}>View</a>
                  <a href="https://thehalalguys.com/menu/" target="_blank">Menu</a>
                </div>
          </div>
      </div>
    </div>
  </div>
  );
}

export default Menu;
