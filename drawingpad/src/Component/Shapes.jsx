import React, { Component } from 'react';
import canvas from 'react-canvas-draw';
import ResizableRect from 'react-resizable-rotatable-draggable';
import './Shapes.css'
import RectangleShape from './RectangleShape';
import CircleShape from './CircleShape';
import SquareShape from './SquareShape';
import TriangleShape from './TriangleShape';


 
export default class Shapes extends Component {
 
    render() { 
        let list=[];
        console.log(this.props.name);
        this.props.name.map((ele,i)=>{
            if(this.props.name[i].shape === "Rectangle"){
            list.push(<RectangleShape {...this.props.name[i]}   Rot={this.props.onRot} Res={this.props.onRes} Dra={this.props.onDra}/>);
            }
            else if(this.props.name[i].shape ===  "Circle"){
                list.push(<CircleShape {...this.props.name[i]} Rot={this.props.onRot} Res={this.props.onRes} Dra={this.props.onDra}/>)
            }
            else if(this.props.name[i].shape ===  "Square"){
                list.push(<SquareShape {...this.props.name[i]} Rot={this.props.onRot} Res={this.props.onRes} Dra={this.props.onDra}/>)
            }
            else{
                list.push(<TriangleShape {...this.props.name[i]} Rot={this.props.onRot} Res={this.props.onRes} Dra={this.props.onDra}/>)
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
 
