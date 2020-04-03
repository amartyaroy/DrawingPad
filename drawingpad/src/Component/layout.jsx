import { SketchPicker } from 'react-color';
import React, { Component } from "react";
import Shapes from "./Shapes";
import './layout.css';
 
class Layout extends Component {
    constructor(props){
        super(props);
        //this.handleRotate = this.handleRotate.bind(this);
    }
    state={
        left_horizontal_bar_items:['Rectangle','Circle','Square','Triangle'],
        arrayShapes:[],
        background:'#000000',
        isSelected:0,
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

                target: null,
                container: null,
                scalable: true,
                resizable: false,
                warpable: false,
                draggable:true,
                shape:shapes,
                width: 200,
                height:100 ,
                top: 100,
                left: 200,
                rotateAngle: 0,
                strokeWidth:'3',
                stroke:'#000000',
                fill:'white',
                rotate: 0,
                scaleX: 1,
                scaleY: 1,
                matrix3d: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
            })    
                
        }
        else if(shapes=="Square"){
            temp.push({
                
                target: null,
                container: null,
                scalable: true,
                resizable: false,
                warpable: false,
                draggable:true,
                shape:shapes,
                width: 100,
                height:100 ,
                top: 100,
                left: 200,
                rotateAngle: 0,
                strokeWidth:'3',
                stroke:'#000000',
                fill:'white',
                rotate: 0,
                scaleX: 1,
                scaleY: 1,
                matrix3d: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
            })    
                
        }
        else if(shapes=="Triangle"){
            temp.push({
   
                target: null,
                container: null,
                scalable: true,
                resizable: false,
                warpable: false,
                draggable:true,
                shape:shapes,
                width: 100,
                height:100 ,
                top: 100,
                left: 200,
                rotateAngle: 0,
                strokeWidth:'3',
                stroke:'#000000',
                fill:'white',
                polygonPoints:'0,100,50,0,100,100',
                rotate: 0,
                scaleX: 1,
                scaleY: 1,
                matrix3d: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]

            })    
                
        }
        else{
            temp.push({
              
                target: null,
                container: null,
                scalable: true,
                resizable: false,
                warpable: false,
                draggable:true,
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
                rotate: 0,
                scaleX: 1,
                scaleY: 1,
                matrix3d: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
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

   setTarget=(index,value)=>{
    let arrayShapes=this.state.arrayShapes;
    arrayShapes[index].target=value;
    this.setState({arrayShapes});
   }

  onDrag = ({ left, top }) => {
    let arrayShapes=this.state.arrayShapes;
    arrayShapes[this.state.isSelected].left=left;
    arrayShapes[this.state.isSelected].top=top;
    this.setState({ arrayShapes});
  };

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
                    <Shapes  {...this.state} onDrag={this.onDrag} clicke={this.clicked} setTarget={this.setTarget}/>
                    <div id="right_horizontal_bar" className="col s2 z-depth-1">{right_horizontal_bar_items}</div>
                </div>
            </div>
        )
    }
    //<Shapes   name={this.state.arrayShapes} Rot={this.handleRotate} Res={this.handleResize} Dra={this.handleDrag} clicke={this.clicked} clickResizable={this.clickResizable} clickScalable={this.clickScalable} setTransform={this.setTransform} setLabel={this.setLabel} onDrag={this.onDrag} onPinch={this.onPinch} onResize={this.onResize} onRotate={this.onRotate} onEnd={this.onEnd} onScale={this.onScale}/>
  }
export default Layout
