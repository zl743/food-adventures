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
  return(
  <div>
  {images.map(image => { return(
    <div className="col s12 m4 picture" style={{paddingLeft:7.5, paddingRight:7.5}}>
        <div className="material-placeholder"><img className="materialboxed" width="100%" src={image}/></div>
    </div>
  )})}
  </div>
)
}

export default imageGallery;
