import React, { Component } from "react";
import CanvasDraw from 'react-canvas-draw';
import './layout.css';
import {Rectangle,Circle,Square} from 'react-shapes';
import Shapes from "./Shapes";


class Layout extends Component {
    state={
        height: 400,
        width: 400,
        left_horizontal_bar_items:['Rectangle','Circle','Square'],
        isDrawable:false,
        selectedShape:'',
        //array
        arrayShapes:[]
    }
    selectShape=(shapes)=>{
        console.log(shapes);
        let temp=this.state.arrayShapes;
        temp.push({shape:shapes});
        this.setState((state)=>{
            return {isDrawable:!state.isDrawable,
                    selectedShape:shapes,
                    arrayShapes:temp
                   
                }
        })

        console.log(this.state);
        
    }

   createShapes=()=>{
       return(
           <ul>
           {
               this.state.left_horizontal_bar_items.map(ele=>{
                   return (
                       <button onClick={this.selectShape.bind(this,ele)} id={ele}>{ele}</button>
                   )
               })
           
           }
           </ul>
       )

   }
   
    render(){
        let shape=this.state.selectedShape;
        let toolbar_items=[]
       
        let right_horizontal_bar_items=[]

        let left_horizontal_bar_items=[Rectangle,Circle,Square]
  

        toolbar_items.push(<button>qwerty</button>)
        left_horizontal_bar_items.push(<button></button>)
        right_horizontal_bar_items.push(<button>qwerty</button>)
        
        return(
            <div id="final_layout">
                <div id="toolbar" className="z-depth-1">{toolbar_items}</div>
                <div id="center_body" className="row">
                    <div id="left_horizontal_bar" className="col s2 z-depth-1">{this.createShapes()}</div>
                    <Shapes name={this.state.arrayShapes}/>
                    <div id="right_horizontal_bar" className="col s2 z-depth-1">{right_horizontal_bar_items}</div>
                </div>
            </div>
        )
    }
}
export default Layout
