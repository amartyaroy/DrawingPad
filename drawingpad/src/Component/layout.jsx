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
        left_horizontal_bar_items:['Save','Rectangle','Circle','Square','Triangle'],
        arrayShapes:[],
        background:'#000000',
        isSelected:0,
        selectedIndex:0,
        mouse:false
    }
    clicked=(index)=>{
        console.log("Selected :",index);
        console.log(index);
        this.setState({
            isSelected: index,
            selectedIndex:index
        })
        this.setState({selectedIndex:index});

    }

    mousedown=()=>{
        console.log("mouse pressed");
        this.setState({mouse:true})
    }

    mouseup=()=>{
        console.log("mouse up");
        this.setState({mouse:false})
    }

    mouseHover=(index)=>{
        if(!this.state.mouse){
            console.log("Enter :",index);
            let arrayShapes=this.state.arrayShapes;
            var uniqueName=".Moveable"+index;
            arrayShapes[index].target=document.querySelector(uniqueName)
            if(index!=this.state.selectedIndex){
                arrayShapes[this.state.selectedIndex].target=null;
            }
            this.setState({arrayShapes});
            this.setState({isSelected:index});
        }
    }

    mouseLeave=(index)=>{
        console.log("Exit :",index);
        if(index!=this.state.selectedIndex){    
            let arrayShapes=this.state.arrayShapes;
            arrayShapes[index].target=null
            var uniqueName=".Moveable"+this.state.selectedIndex;
            arrayShapes[this.state.selectedIndex].target=document.querySelector(uniqueName)
            this.setState({arrayShapes});   
        }     
        this.setState({isSelected:this.state.selectedIndex});       
        if(this.state.mouse){
            this.setState({mouse:false})
        } 
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
                       <button className="btn btn-primary" onClick={this.selectShape.bind(this,ele)} id={ele}>{ele}</button>
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
    console.log("New added and selected :",index);
    let arrayShapes=this.state.arrayShapes;
    arrayShapes[index].target=value;
    if(this.state.isSelected!=index){
        arrayShapes[this.state.isSelected].target=null;
    }
    this.setState({arrayShapes});
    this.setState({isSelected:index,selectedIndex:index})
   }

  onDrag = ({ left, top }) => {
    let arrayShapes=this.state.arrayShapes;
    arrayShapes[this.state.isSelected].left=left;
    arrayShapes[this.state.isSelected].top=top;
    this.setState({ arrayShapes});
  };

  onResize=({width,height},shape)=>{
    console.log("Resizing ",shape);
    let arrayShapes=this.state.arrayShapes;
    if(shape=="Rectangle"){    
        arrayShapes[this.state.isSelected].width=width;
        arrayShapes[this.state.isSelected].height=height;
    }
    else{
        if(height==this.state.arrayShapes[this.state.isSelected].height){
            arrayShapes[this.state.isSelected].width=width;
            arrayShapes[this.state.isSelected].height=width;        
        }
        else if (width==this.state.arrayShapes[this.state.isSelected].width){
            arrayShapes[this.state.isSelected].width=height;
            arrayShapes[this.state.isSelected].height=height;        
        }
        else{
            if(height>width){
                arrayShapes[this.state.isSelected].width=height;
                arrayShapes[this.state.isSelected].height=height; 
            }
            else{
                arrayShapes[this.state.isSelected].width=width;
                arrayShapes[this.state.isSelected].height=width;        
            }
        }
        if(shape=="Circle"){
            var temp=arrayShapes[this.state.isSelected].height;
            arrayShapes[this.state.isSelected].radius=(temp)/2; 
            arrayShapes[this.state.isSelected].x_cord=(temp)/2; 
            arrayShapes[this.state.isSelected].y_cord=(temp)/2;
        }
        if(shape=="Triangle"){
            var temp=arrayShapes[this.state.isSelected].height;
            var newpolygon='0,'+temp+','+temp/2+',0,'+temp+','+temp;
            arrayShapes[this.state.isSelected].polygonPoints=newpolygon;
        }
    }
    
    this.setState({ arrayShapes});
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
                <div id="toolbar" className=" z-depth-1">{this.createShapes()}</div>
                <div id="center_body" className="row">
                    
                    <Shapes  {...this.state} onDrag={this.onDrag} onResize={this.onResize} clicke={this.clicked} setTarget={this.setTarget} mouseHover={this.mouseHover} mouseLeave={this.mouseLeave} mousedown={this.mousedown} mouseup={this.mouseup}/>
                    <div id="right_horizontal_bar" className="col s2 z-depth-1">{right_horizontal_bar_items}</div>
                </div>
            </div>
        )
    }
  }
export default Layout
