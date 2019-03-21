import React, { Component } from 'react';
import ImageGallery from './imageGallery.js';

function Page(props) {

  function createMarkup() {
    return {__html: props.Description};
  }
  if(!props.Name){
    return(
      <div className="col s12 m8 fullRowContent pageContent valign-wrapper">
      <h1 style={{marginTop: 0, textAlign: 'center'}}>I'm Zach and I like to eat.</h1>
      
      </div>)
  } else{
        return(

      <div className="col s12 m8 fullRowContent pageContent">

          <div className="row">
            <div className="col s12">
            <h1>{props.Name}</h1>
            <span className="rating cyan-text"> Reine's Rating: {props.Ratings2}</span>
            <br/>
            <span className="rating amber-text"> Zach's Rating: {props.Ratings}</span>
              <p dangerouslySetInnerHTML={createMarkup()}></p>
              <br/>
            </div>
          </div>
          <ImageGallery Name={props.Name}/>
      </div>)
  }

}

export default Page;
