import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Authenticator } from "@bitpod/platform-bar-shell-react";
import { getPlatformBarConfig } from  '../Config';
import Layout from './layout';

import './login.css';


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
      <div id="container_box">  
        <div id="header_bar">
          <Authenticator initConfig={ PlatformBarConfig }></Authenticator>
          <h3 id="app_name">Ⓓⓡⓐⓦⓘⓝⓖ Ⓟⓐⓓ</h3>
        </div>
        <div id="canvas_box">
          <Layout/>
        </div>
      </div>
    );
  }
}

export default login;
