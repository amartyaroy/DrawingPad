import React, { Component } from "react";
import './layout.css';
import Shapes from "./Shapes";
import { SketchPicker } from 'react-color';




class Layout extends Component {
    constructor(props){
        super(props);
        this.handleRotate = this.handleRotate.bind(this);
    }
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
        background:'#000000',
        polygonPoints:"0,100,50,0,100,100"

    }
    handleChangeColor=(color)=>{
        this.setState({ background: color.hex });

    }
    selectShape=(shapes)=>{
        let temp=this.state.arrayShapes;
        temp.push({
            shape:shapes,
            width: this.state.width,
            height:this.state.height ,
            top: this.state.top,
            left: this.state.left,
            rotateAngle: this.state.rotateAngle,
            radius:this.state.radius,
            stroke:this.state.stroke,
            strokeWidth:this.state.strokeWidth,
            x_cord:this.state.x_cord,
            y_cord:this.state.y_cord,
            fill:this.state.fill,
            polygonPoints:this.state.polygonPoints

        });
        this.setState((state)=>{
            return {isDrawable:!state.isDrawable,
                    selectedShape:shapes,
                    arrayShapes:temp,
                   
                   
                }
        })

    
        
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
   createToolBar=()=>{
       return(
           <ul>
               {
                   this.toolbar_items.map(ele=>{
                       return(
                           <button id={ele}>{ele}</button>
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
       console.log("rotate called");
      
        this.setState({
            rotateAngle
        })

    }
    handleDrag = (deltaX, deltaY) => {
        console.log("drag called");
        this.setState({
        left: this.state.left + deltaX,
        top: this.state.top + deltaY
        })
       
    }
   
    render(){
      
        let toolbar_items=['New','Open','Save'];
       
        let right_horizontal_bar_items=[]

        let left_horizontal_bar_items=[]
  

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
                    <Shapes   name={this.state.arrayShapes} ob={this.state}  onRot={this.handleRotate} onRes={this.handleResize} onDra={this.handleDrag} />
                    <div id="right_horizontal_bar" className="col s2 z-depth-1">{right_horizontal_bar_items}</div>
                </div>
            </div>
        )
    }
}
export default Layout
