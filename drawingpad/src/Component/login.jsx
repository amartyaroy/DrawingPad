import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Authenticator } from "@bitpod/platform-bar-shell-react";
import { getPlatformBarConfig } from  '../Config';
import Canvas from './canvas';

let PlatformBarConfig = getPlatformBarConfig();
let access_token;
PlatformBarConfig["on_auth_state_change"] = function(state1) {
  
  if(state1!=null){
    access_token=state1.access_token;
  
  }
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
      <div className="bg bg-color=blue">
       
              <ul id="nav">
                
                <li><Authenticator initConfig={ PlatformBarConfig } /></li>
                
                
                
              </ul>
              <Canvas/>
           

             
              
              
      </div>
    );
  }
}

export default login;
