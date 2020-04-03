import React, { Component } from 'react';
import canvas from 'react-canvas-draw';
import RectangleShape from './RectangleShape';
import CircleShape from './CircleShape';
import SquareShape from './SquareShape';
import TriangleShape from './TriangleShape';
import './Shapes.css'
 
export default class Shapes extends Component { 
    render() { 
        let list=[];
        this.props.arrayShapes.map((ele,i)=>{
            if(this.props.arrayShapes[i].shape === "Rectangle"){
            list.push(<RectangleShape id={i} {...this.props.arrayShapes[i]} onDrag={this.props.onDrag} cliclee={this.props.clicke} setTarget={this.props.setTarget}/>);
            }
            else if(this.props.arrayShapes[i].shape ===  "Circle"){
                list.push(<CircleShape {...this.props.arrayShapes[i]} id={i} onDrag={this.props.onDrag} cliclee={this.props.clicke} setTarget={this.props.setTarget}/>)
            }
            else if(this.props.arrayShapes[i].shape ===  "Square"){
                list.push(<SquareShape {...this.props.arrayShapes[i]} id={i} onDrag={this.props.onDrag} cliclee={this.props.clicke} setTarget={this.props.setTarget}/>)
            }
            else{
                list.push(<TriangleShape {...this.props.arrayShapes[i]} id={i} onDrag={this.props.onDrag} cliclee={this.props.clicke} setTarget={this.props.setTarget}/>)
            }
        })
        
        return ( 
            <div id="canvas_body" className="col s8 z-depth-1">
            <canvas/>
               {list} 
            </div>
         );
    }
}
 
