import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Authenticator } from "@bitpod/platform-bar-shell-react";
import { getPlatformBarConfig } from  '../Config';
let PlatformBarConfig = getPlatformBarConfig();


PlatformBarConfig["on_auth_state_change"] = function(state) {
  console.log("state",state);
};
//this is the first checkinf
class login extends Component {
  constructor(props) {
      super(props);

      if(!window.React){
        window.React = React;
        window.ReactDOM = ReactDOM; 
    }
  }
  render() {
    return (
      <div className="bg bg-color=blue">
       
              <ul id="nav">
                
                <li><Authenticator initConfig={ PlatformBarConfig } /></li>
              </ul>
        
      </div>
    );
  }
}

export default login;
