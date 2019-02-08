import React, { Component } from 'react';
import noreetuh1 from './img/noreetuh-1.png'
import noreetuh2 from './img/noreetuh-2.png'
import noreetuh3 from './img/noreetuh-3.png'
function Page(props) {
  if(props.Name == 'Name'){
    return(
      <div className="col s12 m8 fullRowContent pageContent">
      <h1>I'm Zach and I like to eat.</h1>

      </div>)
  } else{
    return(

      <div className="col s12 m8 fullRowContent pageContent">

          <div className="row">
            <div className="col s12">
            <h1>{props.Name}</h1>
            <span className="rating amber-text">{props.Ratings}</span>
              <p>{props.Description}</p>
              <br/>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m4">
                <div className="material-placeholder"><img className="materialboxed" width="100%" src={noreetuh1}/></div>
            </div>
            <div className="col s12 m4">
                <div className="material-placeholder"><img className="materialboxed" width="100%" src={noreetuh2}/></div>
            </div>
            <div className="col s12 m4">
                <div className="material-placeholder"><img className="materialboxed" width="100%" src={noreetuh3}/></div>
            </div>
          </div>
      </div>)
  }

}

export default Page;
