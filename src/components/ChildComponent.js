
import React, { Component } from 'react';
import '../styles/App.css';


export default class ChildComponent extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>Dumb Component receiving Props
        <div>
        {this.props.children}
          <input className="submitbtn" type="submit" onClick={this.props.onClick}/>
        </div>
      </div>
    );
  }
}
