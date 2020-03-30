import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Authenticator } from "@bitpod/platform-bar-shell-react";
import { getPlatformBarConfig } from  '../Config';

import Canvas from './canvas';

import Layout from './layout';

import './login.css';


let PlatformBarConfig = getPlatformBarConfig();
let access_token;
function state(){
  PlatformBarConfig["on_auth_state_change"] = function(state1) {
  
    if(state1!=null){
      access_token=state1.access_token;
    
    }
   };
  return state;
}





//this is the first checkinf
export default class login extends Component {
  constructor(props) {
      super(props);

      if(!window.React){
        window.React = React;
        window.ReactDOM = ReactDOM; 
    }
    
  }
  state={
    isLoggedIn:false
  }



  setLoginState=(status)=>{

    console.log('setting state',status);
    if(this.status!=null){
     
      this.setState({isLoggedIn:true})
    }
    console.log('set state',this.state.isLoggedIn);
    
  }
 
  

  render() {
    let { isLoggedIn } =this.state;
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


