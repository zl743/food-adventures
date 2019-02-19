import React, { Component } from 'react';

function imageGallery(props) {

  function importAll(r) {
    let images = [];
    for (var index = 0; index < r.keys().map(r).length; ++index) {
      if(r.keys().map(r)[index].indexOf(props.Name.replace(/\s+/g, '').toLowerCase()) !== -1){
        images.push(r.keys().map(r)[index]);
      }
    }
    return images;
  }
  const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));
  if(images.length == 2){
    return(
      <div className="row">
        <div className="col s12 m4 offset-m1 picture">
            <div className="material-placeholder"><img className="materialboxed" width="100%" src={images[0]}/></div>
        </div>
        <div className="col s12 m4 offset-m1 picture">
            <div className="material-placeholder"><img className="materialboxed" width="100%" src={images[1]}/></div>
        </div>
      </div>
    )
  } else if(images.length == 3){
    return(
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
    )
  } else if (images.length == 4){
    return(
      <div className="row">
        <div className="col s12 m3 picture">
            <div className="material-placeholder"><img className="materialboxed" width="100%" src={images[0]}/></div>
        </div>
        <div className="col s12 m3 picture">
            <div className="material-placeholder"><img className="materialboxed" width="100%" src={images[1]}/></div>
        </div>
        <div className="col s12 m3 picture">
            <div className="material-placeholder"><img className="materialboxed" width="100%" src={images[2]}/></div>
        </div>
        <div className="col s12 m3 picture">
            <div className="material-placeholder"><img className="materialboxed" width="100%" src={images[3]}/></div>
        </div>
      </div>
    )
  }
  else if (images.length == 6){
    return(
      <div>
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
      <div className="row">
        <div className="col s12 m4 picture">
            <div className="material-placeholder"><img className="materialboxed" width="100%" src={images[3]}/></div>
        </div>
        <div className="col s12 m4 picture">
            <div className="material-placeholder"><img className="materialboxed" width="100%" src={images[2]}/></div>
        </div>
        <div className="col s12 m4 picture">
            <div className="material-placeholder"><img className="materialboxed" width="100%" src={images[3]}/></div>
        </div>
      </div>
      </div>
    )
  }

}

export default imageGallery;
