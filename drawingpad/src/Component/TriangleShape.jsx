import React, { Component } from 'react';
import ResizableRect from 'react-resizable-rotatable-draggable';

export default class TriangleShape extends Component {
    componentDidMount(){
      console.log("nkadhbv",this.props)
        var a=document.createElement("div")
        a.innerHTML="<svg id="+this.props.id+" height="+this.props.height+" width="+this.props.width+" fill="+this.props.fill+" stroke="+this.props.stroke+" stroke-width="+this.props.strokeWidth+"> <polygon points="+this.props.polygonPoints+" /> </svg>";
        document.getElementsByClassName("fFutOK")[this.props.id].appendChild( a );
    }
    render() {    
        return (
            <div  onClick={()=>this.props.cliclee(this.props.id)}>
                <ResizableRect
                    left={this.props.left}
                    top={this.props.top}
                    width={this.props.width}
                    height={this.props.height}
                    stroke={this.props.stroke}
                    rotateAngle={this.props.rotateAngle}
                    zoomable='n, w, s, e, nw, ne, se, sw'
                    onRotate={this.props.Rot}
                    onResize={this.props.Res}
                    onDrag={this.props.Dra}
                />       
            </div>
          );
    }
}
 
