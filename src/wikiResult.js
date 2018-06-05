import React, { Component } from "react";
import './css/wikiResult.css';

export default class WikiResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
     
  } 
  render(){
    const header = this.props.wikiRes[1][0];
    const content = this.props.wikiRes[2][0];
    const image = this.props.wikiImage;
    let imageExists = false;
    if (image !== '') {
      imageExists = true;
    }
    return(
      <div className="Wiki-text">
        <h2> {header} </h2>
        <p> {content} </p>
        {imageExists ? <img src={image} align="middle"/> : ''}
      </div>
    );
  }

}