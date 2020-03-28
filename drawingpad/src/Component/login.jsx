import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Authenticator } from "@bitpod/platform-bar-shell-react";
import { getPlatformBarConfig } from  '../Config';
import './login.css'
let PlatformBarConfig = getPlatformBarConfig();

PlatformBarConfig["on_auth_state_change"] = function(state) {
  console.log("state",state);
};

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
      <div id="header_bar">
        <Authenticator initConfig={ PlatformBarConfig }/>
        <h3 id="app_name">Ⓓⓡⓐⓦⓘⓝⓖ Ⓟⓐⓓ</h3>
      </div>
    );
  }
}

export default login;
