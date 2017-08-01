import React, { Component } from 'react';
import ChildComponent from './ChildComponent.js';
import DisplayComponent from './DisplayComponent.js';
import '../styles/App.css';


export default class ParentComponent extends Component {
  constructor(props){
    super(props);

    //we are really in a *bind* here.... :)
    //fix it...
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);



    //state lives here
    this.state = {
      whatToSay: "",
      whatWasSaid: "",
    }
  }
  handleInput(e) {
    e.preventDefault();
    console.log("Are you my Daddy?");
    //set the state on input change
    this.setState({whatToSay: e.target.value});
    console.log(this.state);
  }
  handleSubmit(e) {
    e.preventDefault();
    //check console to see if firing
    console.log("fired");
    let what = this.state.whatToSay;
    //set the state for props and for value (prevents output from appearing when typing)
    this.setState({whatToSay: ' ', whatWasSaid: what});
    //clear our input by resetting state

  }

  // Smart Component: I have a function, but something isn't working? I also need to pass that function to the ChildComponent.
  render() {
    return (
      <div>
        <form className="form">
            <div>
              <input className="textfield" onChange={this.handleInput} type="text" placeholder="Say It, Don't Spray It!"  value={this.state.value}/>
              </div>

              <div>
                <ChildComponent  onClick={this.handleSubmit}/>
                <DisplayComponent sayWhat={this.state.whatWasSaid} />
              </div>
        </form>
      </div>
    );
  }
}
