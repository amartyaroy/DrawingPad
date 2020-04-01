import React, { Component } from "react";
import CanvasDraw from 'react-canvas-draw';
import './layout.css';
import {Rectangle,Circle,Square,Triangle} from 'react-shapes';
import Shapes from "./Shapes";
import { SketchPicker } from 'react-color';
import RectangleSelection from "react-rectangle-selection"


class Layout extends Component {
    state={
        width: 100,
        height: 100,
        top: 100,
        left: 300,
        rotateAngle: 0,
        rotatable:true,
        left_horizontal_bar_items:['Rectangle','Circle','Square','Triangle'],
        isDrawable:false,
        selectedShape:'',
        arrayShapes:[],
        fill:'white',
        stroke:'#000000',
        x_cord:'50',
        y_cord:'50',
        radius:'40',
        strokeWidth:'3',
        border:'3px dotted black',
        isSelected:'body',
        background:'#000000'

    }
    handleChangeColor=(color)=>{
        this.setState({ background: color.hex });

    }
    selectShape=(shapes)=>{
        let temp=this.state.arrayShapes;
        temp.push({shape:shapes,
            // width: 100,
            // height: 100,
            // top: 100,
            // left: 100,
            // rotateAngle: 0,
        });
        this.setState((state)=>{
            return {isDrawable:!state.isDrawable,
                    selectedShape:shapes,
                    arrayShapes:temp,
                   
                   
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
   handleResize = (style, isShiftKey, type) => {
      
    
    
    let { top, left, width, height } = this.state;
    top = Math.round(height)
    left = Math.round(top)
    width = Math.round(left);
    height = Math.round(width);
   
    this.setState({
      top,
      left,
      width,
      height
    })
  


  }
    handleRotate = (rotateAngle) => {
        this.setState({
        rotateAngle
        })
       
    }
    handleDrag = (deltaX, deltaY) => {
        this.setState({
        left: this.state.left + deltaX,
        top: this.state.top + deltaY
        })
       
    }
   
    render(){
        let shape=this.state.selectedShape;
        let toolbar_items=[]
       
        let right_horizontal_bar_items=[]

        let left_horizontal_bar_items=[Rectangle,Circle,Square,Triangle]
  

        toolbar_items.push(<button>qwerty</button>)
        left_horizontal_bar_items.push(<button></button>)
        right_horizontal_bar_items.push(<SketchPicker  color={ this.state.background }
            onChangeComplete={ this.handleChangeComplete }

            />)
        
        return(
            <div id="final_layout">
                <div id="toolbar" className="z-depth-1">{toolbar_items}</div>
                <div id="center_body" className="row">
                    <div id="left_horizontal_bar" className="col s2 z-depth-1">{this.createShapes()}</div>
                    <Shapes  name={this.state.arrayShapes} ob={this.state}  onRot={this.handleRotate} onRes={this.handleResize} onDra={this.handleDrag} />
                    <div id="right_horizontal_bar" className="col s2 z-depth-1">{right_horizontal_bar_items}</div>
                </div>
            </div>
        )
    }
}
export default Layout
