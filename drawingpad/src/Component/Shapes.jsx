import React, { Component } from 'react';
import {Rectangle,Circle} from 'react-shapes';
import Canvas from 'react-canvas-draw';
import ResizableRect from 'react-resizable-rotatable-draggable';
 
export default class Shapes extends Component {
    render() { 
        let list=[];
        for(let i=0;i<this.props.name.length;i++){
            console.log('inside loop');
            console.log('looping',this.props.name);
            if(this.props.name[i].shape=== "Rectangle"){
                
                list.push(<Rectangle
                    width={200}
                    height={100}
                    fill={{color:'yellow'}} 
                    rotateAngle={100}
                    //stroke={{color:'#000000'}}

                    //strokeWidth={3}
                />)

            }else if(this.props.name[i].shape === "Circle"){
                list.push(<Circle
                    r={50}
                    fill={{color:'blue'}} 
                    //stroke={{color:'#ffffff'}}
                   /// strokeWidth={3}
                />)
            }
            else{
                list.push(<Rectangle
                    width={200}
                    height={200}
                    fill={{color:'red'}} 
                    //stroke={{color:'#ffffff'}}
                   // strokeWidth={3}
                />)
            }
            console.log('this is',list);
        }

        return ( 
            <div id="canvas_body" className="col s8 z-depth-1">
            <canvas/>
               {list}
            </div>
         );
    }
}
 
