import { SketchPicker } from 'react-color';
import React, { Component } from "react";
import Shapes from "./Shapes";
import './layout.css';
 
class Layout extends Component {
    constructor(props){
        super(props);
        this.handleRotate = this.handleRotate.bind(this);
    }
    state={
        left_horizontal_bar_items:['Rectangle','Circle','Square','Triangle'],
        arrayShapes:[],
        background:'#000000',
        isSelected:0
    }
    clicked=(index)=>{
        console.log(index);
        this.setState({
            isSelected: index
        })
    }
    handleChangeColor=(color)=>{
        this.setState({ background: color.hex });

    }
    selectShape=(shapes)=>{
        let temp=this.state.arrayShapes;
        if(shapes=="Rectangle"){
            temp.push({
                shape:shapes,
                width: 200,
                height:100 ,
                top: 100,
                left: 200,
                rotateAngle: 0,
                strokeWidth:'3',
                stroke:'#000000',
                fill:'white'
            })    
                
        }
        else if(shapes=="Square"){
            temp.push({
                shape:shapes,
                width: 100,
                height:100 ,
                top: 100,
                left: 200,
                rotateAngle: 0,
                strokeWidth:'3',
                stroke:'#000000',
                fill:'white'
            })    
                
        }
        else if(shapes=="Triangle"){
            temp.push({
                shape:shapes,
                width: 100,
                height:100 ,
                top: 100,
                left: 200,
                rotateAngle: 0,
                strokeWidth:'3',
                stroke:'#000000',
                fill:'white',
                polygonPoints:'0,100,50,0,100,100'

            })    
                
        }
        else{
            temp.push({
                shape:shapes,
                width: 100,
                height:100 ,
                top: 100,
                left: 200,
                rotateAngle: 0,
                strokeWidth:'3',
                stroke:'#000000',
                fill:'white',
                x_cord:'50',
                y_cord:'50',
                radius:'50',

            })    
                
        }
        this.setState((state)=>{
            return {
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
        let { top, left, width, height } = style;
        var temp=this.state.arrayShapes;
        temp[this.state.isSelected].top = Math.round(top)
        temp[this.state.isSelected].left = Math.round(left)
        temp[this.state.isSelected].width = Math.round(width);
        temp[this.state.isSelected].height = Math.round(height);
        this.setState({
            arrayShapes:temp
        })
    }
    handleRotate = (rotateAngle) => {
        var temp=this.state.arrayShapes;
        temp[this.state.isSelected].rotateAngle=rotateAngle;
        this.setState({
            arrayShapes:temp
        })
    }
    handleDrag = (deltaX, deltaY) => {
        var temp=this.state.arrayShapes;
        temp[this.state.isSelected].left+=deltaX;
        temp[this.state.isSelected].top+=deltaY;
        this.setState({
            arrayShapes:temp
        })
       
    }
    render(){
        let toolbar_items=['New','Open','Save'];
        let right_horizontal_bar_items=[]
        let left_horizontal_bar_items=[]
  
        toolbar_items.push(<button>qwerty</button>)
        left_horizontal_bar_items.push(<button></button>)
        right_horizontal_bar_items.push(
            <SketchPicker  color={ 
                this.state.background 
            }
            onChangeComplete={
                 this.handleChangeComplete
            }/>)
        
        return(
            <div id="final_layout">
                <div id="toolbar" className="z-depth-1">{toolbar_items}</div>
                <div id="center_body" className="row">
                    <div id="left_horizontal_bar" className="col s2 z-depth-1">{this.createShapes()}</div>
                    <Shapes   name={this.state.arrayShapes}  onRot={this.handleRotate} onRes={this.handleResize} onDra={this.handleDrag} clicke={this.clicked}/>
                    <div id="right_horizontal_bar" className="col s2 z-depth-1">{right_horizontal_bar_items}</div>
                </div>
            </div>
        )
    }
}
export default Layout
