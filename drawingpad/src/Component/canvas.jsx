import React,{Component} from "react";
import reactDom from "react-dom";
import CanvasDraw from 'react-canvas-draw';


class Canvas extends Component {
    state = { 
    color: "#ffc600",
    width: 900,
    height: 900,
    brushRadius: 10,
    lazyRadius: 12

     }
     
    render() { 
        return (
           <div className="CanvasContainer">
                <CanvasDraw/>
           </div> 
          )
    }
}
 
export default Canvas;
