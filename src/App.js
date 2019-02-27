import React, { Component } from 'react';
import Page from './page.js';
import Menu from './menu.js';
import Nav from './Nav.js';
import data from './data/food.json';
class App extends React.Component {
  state = {
  }
  handleClick = (Name, Descriptions, Ratings, Ratings2) => {
      this.setState({
      Name: Name,
      Description: Descriptions,
      Rating: Ratings,
      Rating2: Ratings2
      })
  }
  activeToggle = (toggle, type, id) => {
    var query;
    var element = document.getElementById(id);
    function sortBy(a,b){

          if(toggle == 'date'){
            var keyA = parseInt(a.id);
            var keyB = parseInt(b.id);
            //console.log(keyA, keyB);
            if(keyA < keyB) return -1;
            if(keyA > keyB) return 1;
            return 0;
          } else if(toggle == 'abc'){
            var keyA = a.name;
            var keyB = b.name;
            //console.log(keyA, keyB);
            if(keyA < keyB) return -1;
            if(keyA > keyB) return 1;
            return 0;
          }


          return data;

      }
    this.setState({
      Filter: toggle,
      Type: type,
      Tab: id
    })

      if(element.classList.contains('active')){
          element.classList.remove('active');
          if(document.getElementById('tab-recipes').classList.contains('active')){
            var query =  data.filter(function(a){return a.type == 'recipe'}).sort(sortBy);
              if(id != 'tab-restaurants'){document.getElementById('tab-restaurants').classList.remove('active');}
          }
          if(document.getElementById('tab-restaurants').classList.contains('active')){
            var query =  data.filter(function(a){return a.type == 'restaurant'}).sort(sortBy)
          }
          if(!document.getElementById('tab-restaurants').classList.contains('active') && !document.getElementById('tab-recipes').classList.contains('active')) {
            var query =  data.sort(sortBy)
          }
        }else {
          element.classList.add('active');
          if(document.getElementById('tab-recipes').classList.contains('active')){
            var query =  data.filter(function(a){return a.type == 'recipe'}).sort(sortBy)
            if(id != 'tab-restaurants'){document.getElementById('tab-restaurants').classList.remove('active');}

          }
          if(document.getElementById('tab-restaurants').classList.contains('active')){
            var query =  data.filter(function(a){return a.type == 'restaurant'}).sort(sortBy)
            document.getElementById('tab-recipes').classList.remove('active');
          }
          if(!document.getElementById('tab-restaurants').classList.contains('active') && !document.getElementById('tab-recipes').classList.contains('active')) {
            var query =  data.sort(sortBy)
          }
        }
          this.setState({Query:query})


  }
  componentDidUpdate(){
    var materialboxElems = window.$('.materialboxed');
    var mboxInstances = window.M.Materialbox.init(materialboxElems, {})
  }
  componentDidMount = (e) => {
  }
  render() {
    return (
      <div className="App">
          <div className="row fullRow">
              <Page Name={this.state.Name} Description={this.state.Description} Ratings = {this.state.Rating} Ratings2 = {this.state.Rating2}>
              </Page>
              <Nav activeToggle={this.activeToggle}></Nav>
              <Menu state={this.state} handleClick={this.handleClick} >
              </Menu>
            </div>
      </div>
    );
  }
}

export default App;
