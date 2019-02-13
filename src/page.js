import React, { Component } from 'react';


function Page(props) {

  function importAll(r) {
    let images = [];
    for (var index = 0; index < r.keys().map(r).length; ++index) {
      if(r.keys().map(r)[index].indexOf(props.Name.replace(/\s+/g, '').toLowerCase()) !== -1){
        images.push(r.keys().map(r)[index]);
      }
    }
    return images;

  }
  function createMarkup() {
    return {__html: props.Description};
  }
  if(!props.Name){
    return(
      <div className="col s12 m8 fullRowContent pageContent valign-wrapper">
      <h1 style={{marginTop: 0, textAlign: 'center'}}>I'm Zach and I like to eat.</h1>

      </div>)
  } else{
    const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));
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
          <div className="row">
            <div className="col s12 m4 picture">
                <div className="material-placeholder"><img className="materialboxed" width="100%" src={images[0]}/></div>
            </div>
            <div className="col s12 m4 picture">
                <div className="material-placeholder"><img className="materialboxed" width="100%" src={images[1]}/></div>
            </div>
            <div className="col s12 m4 picture">
                <div className="material-placeholder"><img className="materialboxed" width="100%" src={images[2]}/></div>
            </div>
          </div>
      </div>)
  }

}

export default Page;
