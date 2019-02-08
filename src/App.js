import React, { Component } from 'react';
import Page from './page.js';
import Menu from './menu.js';
class App extends React.Component {
  state = {
    Name : 'Name',
    Description : 'Description Goes Here',
    Rating : '★★★★★'
  }
  handleClick = (Name, Descriptions, Ratings) => {
      this.setState({
      Name: Name,
      Description: Descriptions,
      Rating: Ratings
      })
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
              <Page Name={this.state.Name} Description={this.state.Description} Ratings = {this.state.Rating}>
              </Page>
              <Menu state={this.state} handleClick={this.handleClick} >
              </Menu>
            </div>
      </div>
    );
  }
}

export default App;
