import React, { Component } from 'react';
import ResizableRect from 'react-resizable-rotatable-draggable';

export default class CircleShape  extends Component {
    componentDidMount(){
        var a=document.createElement("div")
        a.innerHTML="<svg id=1 height=100 width=100 > <circle cx=50  cy=60 r=20 stroke='black' stroke-width='3' fill='white' />";
        document.getElementsByClassName("fFutOK")[0].appendChild( a )

    }
    render() { 
        return (
            <div>
                <ResizableRect
                         left={100}
                         top={100}
                         width={100}
                         height={100}
                         stroke={'black'}
                        
                         rotateAngle={10}
                         zoomable='n, w, s, e, nw, ne, se, sw'
                         onRotate={this.props.Rot}
                         onResize={this.props.Res}
                         onDrag={this.props.Dra}

                />
            </div>
          );
    }
}
 