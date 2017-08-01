import React, { Component } from 'react';
import '../styles/App.css';


export default class DisplayComponent extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
    <h2 className="displayheader">"Give me something to display!"</h2>
          <div className="saywhat">
          {this.props.sayWhat}
          </div>
      </div>
    );
  }
}
