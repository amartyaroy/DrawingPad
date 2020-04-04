import React, { Component } from 'react';
import Moveable from "react-moveable";

export default class Rectangle_Shape extends Component {
 uniqueName="Moveable"+this.props.id;
  componentDidMount() {
    this.props.setTarget(this.props.id,document.querySelector("."+this.uniqueName));
  }

  onDrag = (...args) => {
    //console.log({ args });
    this.props.onDrag(...args);
  };

  onResize = (...args) => {
    console.log({ args });
    this.props.onResize(...args,this.props.shape);
  };

  render() {
    const { left, top, height, width,fill,stroke,strokeWidth,radius,y_cord,x_cord } = this.props;
    return (
      <div  onMouseEnter={()=>this.props.mouseHover(this.props.id)} 
            onMouseLeave={()=>this.props.mouseLeave(this.props.id)}
            onClick={()=>this.props.cliclee(this.props.id)}
            onMouseDown={()=>this.props.mousedown()}
            onMouseUp={()=>this.props.mouseup()}  >
        <Moveable
          height={height}
          width={width} 
          left={left}
          top={top}
          throttleDrag={1}
          container={document.querySelector("#canvas_body")}
          target={this.props.target}
          draggable={true}
          sizeable={false}
          resizable={true}
          onDrag={this.onDrag}
          onResize={this.onResize}
        />
        <div 
          className={this.uniqueName}
          style={{
            width: `${width}px`,
            height: `${height}px`,
            left: `${left}px`,
            top: `${top}px`,
            position: "absolute",
            //border: "1px solid black"
          }} >
          <svg height={height} width={width} >
                <circle cx={x_cord}  cy={y_cord} r={radius} stroke={stroke} stroke-width={strokeWidth} fill={fill} />
            </svg>
        </div>
      </div>
    );
  }
}
 
