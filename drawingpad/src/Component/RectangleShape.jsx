import React, { Component } from 'react';
import ResizableRect from 'react-resizable-rotatable-draggable';

export default class Rectangle_Shape extends Component {
    
    componentDidMount(){
        
        
        
  var a=document.createElement("div")
  a.innerHTML="<svg  id=1 width=100 height=100 fill='white' stroke='black' stroke-width=3> <rect  left=50 top=20 width=70 height=20 stroke='black' stroke-width='3' fill='white'}";
  document.getElementsByClassName("fFutOK")[0].appendChild( a );

       

}
    render() { 
        console.log("rectangle",this.props);
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
 
