import React, { Component } from 'react';
import Moveable from "react-moveable";

export default class Rectangle_Shape extends Component {
 uniqueName="Moveable"+this.props.id;
  componentDidMount() {
    this.props.setTarget(this.props.id,document.querySelector("."+this.uniqueName));
  }

  onDrag = (...args) => {
    console.log({ args });
    this.props.onDrag(...args);
  };

  render() {
    const { left, top, height, width,fill,stroke,strokeWidth,radius,y_cord,x_cord } = this.props;
    return (
      <div  onMouseEnter={()=>this.props.cliclee(this.props.id)} >
        <Moveable
          height={height}
          width={width} 
          left={left}
          top={top}
          throttleDrag={1}
          container={document.querySelector("body")}
          target={this.props.target}
          draggable={true}
          sizeable={false}
          onDrag={this.onDrag}
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
 
