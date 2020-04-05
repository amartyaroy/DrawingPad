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
    //console.log({ args });
    this.props.onResize(...args,this.props.shape);
  };

  onRotate = (...args) => {
    //console.log({ args });
    this.props.onRotate(...args);
  };


  render() {
    const { left, top, height, width,fill,stroke,strokeWidth,rotate } = this.props;
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
          rotatable={true}
          onDrag={this.onDrag}
          onResize={this.onResize}
          onRotate={this.onRotate}
        />
        <div 
          className={this.uniqueName}
          style={{
            width: `${width}px`,
            height: `${height}px`,
            left: `${left}px`,
            top: `${top}px`, 
            position: "absolute",
            transform:`rotate(${rotate}deg)`
          }} >
          <svg width={width} height={height} fill={fill} stroke={stroke}  stroke-width={strokeWidth}>
             <rect width={width}  height={height} /> </svg>
        </div>
      </div>
    );
  }
}
 
