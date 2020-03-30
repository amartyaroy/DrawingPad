import React, { Component } from "react";
import CanvasDraw from 'react-canvas-draw';
import './layout.css';
//import M from 'materialize-css'

class Layout extends Component {
    state={
        height: 400,
        width: 400,
    }
    render(){
        
        let toolbar_items=[]
        let left_horizontal_bar_items=[]
        let right_horizontal_bar_items=[]

        toolbar_items.push(<button>qwerty</button>)
        left_horizontal_bar_items.push(<button>qwerty</button>)
        right_horizontal_bar_items.push(<button>qwerty</button>)
        
        return(
            <div id="final_layout">
                <div id="toolbar" class="z-depth-1">{toolbar_items}</div>
                <div id="center_body" class="row">
                    <div id="left_horizontal_bar" class="col s2 z-depth-1">{left_horizontal_bar_items}</div>
                    <div id="canvas_body" class="col s8 z-depth-1"><CanvasDraw/></div>
                    <div id="right_horizontal_bar" class="col s2 z-depth-1">{right_horizontal_bar_items}</div>
                </div>
            </div>
        )
    }
}
export default Layout
