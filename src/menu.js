import React, { Component } from 'react';

function Menu(props) {
  var names = ['Noreetuh','The Halal Guys', '21 Shanghai House','Karakatta']
  var recipeNames = ['Enchiladas']
  var ratings = {
    Noreetuh: '★★★★★',
    HalalGuys: '★★★★',
    Enchiladas: '★★★★',
    Shanghai21: '★★★★',
    Karakatta: '★★★',
  }
  var ratings2 = {
    Noreetuh: '★★★★★',
    HalalGuys: '★★★★★',
    Enchiladas: '★★★★',
    Shanghai21: '★★★',
    Karakatta: '★★★'
  }
  var descriptions = {
    Noreetuh : 'This place was awesome. I was skeptical at first because I didn\'t want to overload on pork dishes, but I ended up getting the pork katsu for an appetizer and pork belly tortellini as my starter anyways. I don\'t even know if that was a mistake, because everything was so good. This place had some of the best pasta I\'ve ever had. A 3 course meal for $42 honestly isn\'t too bad when you consider the quality of each dish and the generous portions in the appetizer. I had a pork katsu to start, which wasn\'t anything amazing but was cooked perfectly.\n The main star of the show was the luau leaf pork belly tortellini in a coconut broth, served with shrimp and clams. For dessert, I shared an upside down pineapple cake served with scoops of vanilla, pineapple, and coconut ice cream.',
    HalalGuys : 'I\'ve been eating from the Halal Guys for a while, but I\'ve never been to the Union Square location. I wish this place had lamb over rice, but unfortunately they only serve chicken, beef gyro, or a combination of both (they also have falafels, though Mahmoun\'s Falafel is a better pick for that and is really close by). This is solid Halal Guys food and the decor is nothing special, but let\'s be honest here, you\'re here go gorge yourself on cheap street food without actually having to eat on the streets on a cold winter day in Union Square.',
    Enchiladas : 'If you\'re craving some Mexican food, this is going to be some of the heaviest, cheesiest messes of beans, meat, and tortilla around. This recipe took less than an hour to make from start to finish including baking time, and was relatively easy to make. While enchiladas aren\'t exactly something you would want to eat on a daily basis (at least I wouldn\'t), this recipe definitely hit the spot and satisfied my Mexican food cravings. It reminded me of my time as a Middle School student eating taquitos out of the freezer, only as a sophisticated adult. I know that comparison doesn\'t really do this recipe justice, but that\'s still one of the highest praises I can give to a recipe, because I absolutely loved eating bags of frozen taquitos right after school.',
    Shanghai21: 'descriptions',
    Karakatta: 'description'
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
                  <p>Hawaiian - <span className="cyan-text darken-4">★ 10/10</span> <br/>128 1st Avenue, New York, NY 10009</p>
                  </div>
                  <div className="card-action">
                    <a id="Noreetuh" href="#" onClick={() => props.handleClick(names[0], descriptions.Noreetuh, ratings.Noreetuh, ratings2.Noreetuh)}>View</a>
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
                <p>Middle Eastern - <span className="cyan-text darken-4">★9/10</span> <br/>307 E 14th St, New York, NY 10003</p>

                </div>
                <div className="card-action">
                  <a id="HalalGuys" href="#" onClick={() => props.handleClick(names[1], descriptions.HalalGuys, ratings.HalalGuys, ratings2.HalalGuys)}>View</a>
                  <a href="https://thehalalguys.com/menu/" target="_blank">Menu</a>
                </div>
          </div>
      </div>
    </div>
    {/*}end card html*/}
    <div className="col s12">
      <div className="card horizontal recipe amber lighten-5 ">

          <div className="card-stacked">
                <div className="card-content">
                                <div className="date grey-text">February 9, 2019</div>
                <h6>Enchiladas</h6>
                <p>Mexican - <span className="cyan-text darken-4">★8/10</span> <br/>Homemade Recipe</p>

                </div>
                <div className="card-action">
                  <a id="Enchiladas" href="#" onClick={() => props.handleClick(recipeNames[0], descriptions.Enchiladas, ratings.Enchiladas, ratings2.Enchiladas)}>View</a>
                  <a href="https://www.allrecipes.com/recipe/229123/best-beef-enchiladas/" target="_blank">Recipe</a>
                </div>
          </div>
      </div>
    </div>
    {/*}end card html*/}
    <div className="col s12">
      <div className="card horizontal">

          <div className="card-stacked">
                <div className="card-content">
                                <div className="date grey-text">February 10, 2019</div>
                <h6>21 Shanghai House</h6>
                <p>Shanghainese - <span className="cyan-text darken-4">★7/10</span> <br/>21 Mott St, New York, NY 10003</p>

                </div>
                <div className="card-action">
                  <a id="Shanghai21" href="#" onClick={() => props.handleClick(names[2], descriptions.Shanghai21, ratings.Shanghai21, ratings2.Shanghai21)}>View</a>
                  <a href="http://21shanghaihouseny.com/" target="_blank">Menu</a>
                </div>
          </div>
      </div>
    </div>
    {/*}end card html*/}
    <div className="col s12">
      <div className="card horizontal">

          <div className="card-stacked">
                <div className="card-content">
                                <div className="date grey-text">February 10, 2019</div>
                <h6>Karakatta</h6>
                <p>Ramen - <span className="cyan-text darken-4">★6/10</span> <br/>230 Thompson St, New York, NY 10012</p>

                </div>
                <div className="card-action">
                  <a id="Shanghai21" href="#" onClick={() => props.handleClick(names[3], descriptions.Karakatta, ratings.Karakatta, ratings2.Karakatta)}>View</a>
                  <a href="http://21shanghaihouseny.com/" target="_blank">Menu</a>
                </div>
          </div>
      </div>
    </div>
  </div>
  );
}

export default Menu;
