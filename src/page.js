import React, { Component } from 'react';
import noreetuh1 from './img/noreetuh-1.png'
import noreetuh2 from './img/noreetuh-2.png'
import noreetuh3 from './img/noreetuh-3.png'
import halalguys1 from './img/halalguys-1.jpg'
import halalguys2 from './img/halalguys-2.jpg'
import halalguys3 from './img/halalguys-3.jpg'
import enchiladas1 from './img/enchiladas-1.jpg'
import enchiladas2 from './img/enchiladas-2.jpg'
import enchiladas3 from './img/enchiladas-3.jpg'
import shanghai211 from './img/enchiladas-1.jpg'
import shanghai212 from './img/enchiladas-2.jpg'
import shanghai213 from './img/enchiladas-3.jpg'
import karakatta1 from './img/enchiladas-1.jpg'
import karakatta2 from './img/enchiladas-2.jpg'
import karakatta3 from './img/enchiladas-3.jpg'

function Page(props) {
  if(props.Name == 'Name'){
    return(
      <div className="col s12 m8 fullRowContent pageContent valign-wrapper">
      <h1 style={{marginTop: 0, textAlign: 'center'}}>I'm Zach and I like to eat.</h1>

      </div>)
  } else{

    switch(props.Name){
      case 'Noreetuh':
       var img1 = noreetuh1;
       var img2 = noreetuh2;
       var img3 = noreetuh3;
      break;
      case 'The Halal Guys':
       var img1 = halalguys1;
       var img2 = halalguys2;
       var img3 = halalguys3;
      break;
      case 'Enchiladas':
        var img1 = enchiladas1;
        var img2 = enchiladas2;
        var img3 = enchiladas3;
        break;
      case '21 Shanghai House':
        var img1 = shanghai211;
        var img2 = shanghai212;
        var img3 = shanghai213;
        break;
      case 'Karakatta':
        var img1 = karakatta1;
        var img2 = karakatta2;
        var img3 = karakatta3;
        break;
      default:
      break;
    }
    return(

      <div className="col s12 m8 fullRowContent pageContent">

          <div className="row">
            <div className="col s12">
            <h1>{props.Name}</h1>
            <span className="rating cyan-text"> Reine's Rating: {props.Ratings2}</span>
            <br/>
            <span className="rating amber-text"> Zach's Rating: {props.Ratings}</span>
              <p>{props.Description}</p>
              <br/>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m4">
                <div className="material-placeholder"><img className="materialboxed" width="100%" src={img1}/></div>
            </div>
            <div className="col s12 m4">
                <div className="material-placeholder"><img className="materialboxed" width="100%" src={img2}/></div>
            </div>
            <div className="col s12 m4">
                <div className="material-placeholder"><img className="materialboxed" width="100%" src={img3}/></div>
            </div>
          </div>
      </div>)
  }

}

export default Page;
