import React, { Component } from 'react';
import ResizableRect from 'react-resizable-rotatable-draggable';
export default class TriangleShape extends Component {
    componentDidMount(){
      
        var a=document.createElement("div")
        a.innerHTML="<svg height=100 width=100 fill='red' stroke='black' stroke-width=3> <polygon points=0,100,50,0,100,100 /> </svg>";
        document.getElementsByClassName("fFutOK")[0].appendChild( a );

  
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
 
