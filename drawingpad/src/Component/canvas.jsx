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
     componentDidMount() {
        // let's change the color randomly every 2 seconds. fun!
        window.setInterval(() => {
          this.setState({
            color: "#" + Math.floor(Math.random() * 16777215).toString(16)
          });
        }, 2000);
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
