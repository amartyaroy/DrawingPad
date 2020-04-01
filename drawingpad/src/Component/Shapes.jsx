import React, { Component } from 'react';
import {Rectangle,Circle,Triangle} from 'react-shapes';
import Canvas from 'react-canvas-draw';
import ResizableRect from 'react-resizable-rotatable-draggable';
import RectangleSelection from "react-rectangle-selection"
import './Shapes.css'


 
export default class Shapes extends Component {
   
    state1={
        isCaught:'final_layout',
    }
    // componentDidMount(){
    //     document.getElementById(this.state.isCaught).setAttribute("class","selected");
    // }
    selected=(a)=>{
       
        this.setState((state1)=>{
            return {
                isCaught:a
                   
              
                }
        })
        
        
    }
  

    render() { 
      
           
        
        const {height,width,fill,top,left,stroke,x_cord,y_cord,strokeWidth,radius,rotateAngle}=this.props.ob;
        let list=[];
        
      
        for(let i=0;i<this.props.name.length;i++){
          
            if(this.props.name[i].shape=== "Rectangle"){
                list.push(
                <div>
                    <ResizableRect
                         left={left}
                         top={top}
                         width={width}
                         height={height}
                         stroke={stroke}
                         rotateAngle={rotateAngle}
                         zoomable='n, w, s, e, nw, ne, se, sw'
                         onRotate={this.props.onRot}
                         onResize={this.props.onRes}
                         onDrag={this.props.onDra}
                    />

                    <svg  id={i} width={width} height={height} fill={fill} stroke={stroke} stroke-width={strokeWidth}>
                    <rect width={width} 
                            height={height}
                            onClick={()=>this.selected(i)}
                            
                        
                            
                        />
                    </svg>
                    
                </div>
               )
               
            //   document.getElementById(this.state.isCaught).setAttribute("class","selected");
              
            }else if(this.props.name[i].shape === "Circle"){
               
                list.push(<svg id={i} height={height} width={width} border={this.props.ob.border}>
                    <circle
                        onClick={()=>this.selected(i)}
                     
                        cx={x_cord} 
                        cy={y_cord} 
                        r={radius} 
                        stroke={stroke}
                        stroke-width={strokeWidth} 
                        fill={fill}
                        
                        
                    />

                   

                </svg>)
              //   document.getElementById(this.state.isCaught).setAttribute("class","selected");
            }
            else if(this.props.name[i].shape === "Square"){
                list.push(
                    <svg  id={i} width={width} height={height} fill={fill} stroke={stroke}  stroke-width={strokeWidth}>
                        <rect width={height} 
                            height={height}
                            onClick={()=>this.selected(i)}

                          
                            
                        />
                    </svg>
                   )
                //   document.getElementById().setAttribute("class","selected");
            }
            else{
                list.push(
                    <svg height={height} width={width} fill={"red"} stroke={stroke} stroke-width={strokeWidth}>
                         <polygon points="1,1,1,1,1,1" />
                    </svg>
                )
            }
           
           
        }
       
        return ( 
            <div id="canvas_body" className="col s8 z-depth-1">
            
            <canvas/>
           
                <ResizableRect
                  list  
                />
               {list}
               
           
            </div>
         );
    }
}
 
