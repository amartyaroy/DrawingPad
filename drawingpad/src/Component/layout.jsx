import { SketchPicker } from 'react-color';
import React, { Component } from "react";
import Shapes from "./Shapes";
import Moveable from "react-moveable";
import './layout.css';


class Layout extends Component {
   
    state={
        
        left_horizontal_bar_items:['Rectangle','Circle','Square','Triangle'],
        toolbar_items:['Create','Save'],
        arrayShapes:[],
        background:'#000000',
        isSelected:0,
        ///////////////////
        scaleX: 1,
        scaleY: 1,
        target: null,
        container: null,
        scalable: true,
        resizable: false,
        width: "250px",
        height: "200px",
        left: "100px",
        top: "100px",
        rotateAngle: "0deg"
       
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
        if(shapes === "Rectangle"){
            temp.push({
                shape:shapes,
                width:this.state.width,
                height:this.state.height,
                top: this.state.top,
                left: this.state.left,
                rotateAngle:this.state.rotateAngle,
                strokeWidth:'3',
                stroke:'#000000',
                fill:'white',
                target: null,
                container:null,
                scalable: true,
                resizable: false,
                        
            })    
                
        }
        else if(shapes === "Square"){
            temp.push({
                shape:shapes,
                width:this.state.width,
                height:this.state.height,
                top: this.state.top,
                left: this.state.left,
                rotateAngle:this.state.rotateAngle,
                strokeWidth:'3',
                stroke:'#000000',
                fill:'white',
                target: null,
                container:null,
                scalable: true,
                resizable: false,
               
            })    
                
        }
        else if(shapes === "Triangle"){
            temp.push({
                shape:shapes,
                width:this.state.width,
                height:this.state.height,
                top: this.state.top,
                left: this.state.left,
                rotateAngle:this.state.rotateAngle,
                strokeWidth:'3',
                stroke:'#000000',
                fill:'white',
                polygonPoints:'0,100,50,0,100,100',
                target: null,
                container:null,
                scalable: true,
                resizable: false,

            })    
                
        }
        else{
            temp.push({
                shape:shapes,
                width:this.state.width,
                height:this.state.height,
                top: this.state.top,
                left: this.state.left,
                rotateAngle:this.state.rotateAngle,
                strokeWidth:'3',
                stroke:'#000000',
                fill:'white',
                x_cord:'50',
                y_cord:'50',
                radius:'50',
                target: null,
                container:null,
                scalable: true,
                resizable: false,

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
                       <button class="btn btn-warning" onClick={this.selectShape.bind(this,ele)} id={ele}>{ele}</button>
                   )
               })
           }
           </ul>
       )
   }
   createToolbar=()=>{
    return(
        <ul>
        {
            this.state.toolbar_items.map(ele=>{
                return (
                    <button class="btn btn-primary" onClick={this.selectShape.bind(this,ele)} id={ele}>{ele}</button>
                )
            })
        }
        </ul>
    )
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
                <div id="toolbar" className="z-depth-1">{this.createToolbar()}{this.createShapes()}</div>
                <div id="center_body" className="row">
                    {/* <div id="left_horizontal_bar" className="col s2 z-depth-1">{this.createShapes()}</div> */}
                    <Shapes   name={this.state.arrayShapes}   onRot={this.onRotate} onRes={this.onResize} onDra={this.onDrag} clicke={this.clicked}/>
                    <div id="right_horizontal_bar" className="col s2 z-depth-1">{right_horizontal_bar_items}</div>
                </div>
            </div>
        )
    }
}
export default Layout
