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
  state={
    guestUser: false,
    loading:false
  }
  constructor(props) {
      super(props);

      if(!window.React){
        window.React = React;
        window.ReactDOM = ReactDOM; 
    }
  }
  
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        guestUser: JSON.parse(localStorage[localStorage[window.$config.oauth.clientId+"lastactiveuserid"]]).guestUser
      })
    },1000)
  }
  render() {
    return (
      <div id="container_box">  
        <div id="header_bar">
          <Authenticator initConfig={ PlatformBarConfig }></Authenticator>
          <h3 id="app_name">Ⓓⓡⓐⓦⓘⓝⓖ Ⓟⓐⓓ</h3>
        </div>
        <div id="canvas_box">{
          (this.state.guestUser)?<div>You are logged out</div>:<Layout/>
        }

        </div>
      </div>
    );
  }
}

export default login;
