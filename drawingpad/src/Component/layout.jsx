// import { SketchPicker } from 'react-color';\
import { SketchPicker } from "react-color";

import React, { Component } from "react";
import Shapes from "./Shapes";
import "./layout.css";
import axios from "axios";

class Layout extends Component {
  constructor(props) {
    super(props);
    //this.handleRotate = this.handleRotate.bind(this);
  }
  state = {
    left_horizontal_bar_items: ["Rectangle", "Circle", "Square", "Triangle"],
    arrayShapes: [],
    background: "#000000",
    isSelected: 0,
    selectedIndex: 0,
    mouse: false,
  };
  clicked = (index) => {
    console.log("Selected :", index);
    console.log(index);
    this.setState({
      isSelected: index,
      selectedIndex: index,
    });
    this.setState({ selectedIndex: index });
  };

  mousedown = () => {
    console.log("mouse pressed");
    this.setState({ mouse: true });
    this.setState({ selectedIndex: this.state.isSelected });
  };

  mouseup = () => {
    console.log("mouse up");
    this.setState({ mouse: false });
    let arrayShapes = this.state.arrayShapes;
    arrayShapes[this.state.isSelected].fixed_angle =
      arrayShapes[this.state.isSelected].rotate;
    this.setState({ arrayShapes });
  };

  canvasmousedown = () => {
    if (this.state.arrayShapes.length > 0) {
      console.log("canvas mouse pressed");
      this.setState({ mouse: true });
      this.setState({ selectedIndex: this.state.isSelected });

      // let arrayShapes=this.state.arrayShapes;
      // arrayShapes[this.state.isSelected].target=null;
      // this.setState({ arrayShapes});
    }
  };

  canvasmouseup = () => {
    if (this.state.arrayShapes.length > 0) {
      console.log("canvas mouse up");
      this.setState({ mouse: false });
      let arrayShapes = this.state.arrayShapes;
      arrayShapes[this.state.isSelected].fixed_angle =
        arrayShapes[this.state.isSelected].rotate;
      this.setState({ arrayShapes });
    }
  };
  mouseHover = (index) => {
    if (!this.state.mouse) {
      console.log("Enter :", index);
      let arrayShapes = this.state.arrayShapes;
      var uniqueName = ".Moveable" + index;
      arrayShapes[index].target = document.querySelector(uniqueName);
      if (index != this.state.selectedIndex) {
        arrayShapes[this.state.selectedIndex].target = null;
      }
      this.setState({ arrayShapes });
      this.setState({ isSelected: index });
    }
  };

  mouseLeave = (index) => {
    if (!this.state.mouse) {
      console.log("Exit :", index);
      if (index != this.state.selectedIndex) {
        let arrayShapes = this.state.arrayShapes;
        arrayShapes[index].target = null;
        var uniqueName = ".Moveable" + this.state.selectedIndex;
        arrayShapes[this.state.selectedIndex].target = document.querySelector(
          uniqueName
        );
        this.setState({ arrayShapes });
      }
      this.setState({ isSelected: this.state.selectedIndex });
      if (this.state.mouse) {
        this.setState({ mouse: false });
      }
    }
  };

  selectShape = (shapes) => {
    let temp = this.state.arrayShapes;
    if (shapes == "Rectangle") {
      temp.push({
        target: null,
        container: null,
        scalable: true,
        resizable: false,
        warpable: false,
        draggable: true,
        shape: shapes,
        width: 200,
        height: 100,
        top: 100,
        left: 200,
        background: "#000000",
        strokeWidth: "3",
        stroke: "#000000",
        fill: "white",
        rotate: 0,
        fixed_angle: 0,
        scaleX: 1,
        scaleY: 1,
        matrix3d: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      });
    } else if (shapes == "Square") {
      temp.push({
        target: null,
        container: null,
        scalable: true,
        resizable: false,
        warpable: false,
        draggable: true,
        shape: shapes,
        width: 100,
        height: 100,
        top: 100,
        left: 200,
        strokeWidth: "3",
        stroke: "#000000",
        fill: "white",
        rotate: 0,
        fixed_angle: 0,
        scaleX: 1,
        scaleY: 1,
        matrix3d: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      });
    } else if (shapes == "Triangle") {
      temp.push({
        target: null,
        container: null,
        scalable: true,
        resizable: false,
        warpable: false,
        draggable: true,
        shape: shapes,
        width: 100,
        height: 100,
        top: 100,
        left: 200,
        strokeWidth: "3",
        stroke: "#000000",
        fill: "white",
        polygonPoints: "0,100,50,0,100,100",
        rotate: 0,
        fixed_angle: 0,
        scaleX: 1,
        scaleY: 1,
        matrix3d: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      });
    } else {
      temp.push({
        target: null,
        container: null,
        scalable: true,
        resizable: false,
        warpable: false,
        draggable: true,
        shape: shapes,
        width: 100,
        height: 100,
        top: 100,
        left: 200,
        strokeWidth: "3",
        stroke: "#000000",
        fill: "white",
        x_cord: "50",
        y_cord: "50",
        radius: "50",
        rotate: 0,
        fixed_angle: 0,
        scaleX: 1,
        scaleY: 1,
        matrix3d: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      });
    }
    this.setState((state) => {
      return {
        arrayShapes: temp,
      };
    });
  };
  createShapes = () => {
    return (
      <ul>
        {this.state.left_horizontal_bar_items.map((ele) => {
          return (
            <button
              className="btn btn-primary"
              onClick={this.selectShape.bind(this, ele)}
              id={ele}
            >
              {ele}
            </button>
          );
        })}
      </ul>
    );
  };
  createToolBar = () => {
    return (
      <ul>
        {this.toolbar_items.map((ele) => {
          return <button id={ele}>{ele}</button>;
        })}
      </ul>
    );
  };

  setTarget = (index, value) => {
    console.log("New added and selected :", index);
    let arrayShapes = this.state.arrayShapes;
    arrayShapes[index].target = value;
    if (this.state.isSelected != index) {
      arrayShapes[this.state.isSelected].target = null;
    }
    this.setState({ arrayShapes });
    this.setState({ isSelected: index, selectedIndex: index });
  };

  onDrag = ({ left, top }) => {
    let arrayShapes = this.state.arrayShapes;
    arrayShapes[this.state.isSelected].left = left;
    arrayShapes[this.state.isSelected].top = top;
    this.setState({ arrayShapes });
  };

  onResize = ({ width, height }, shape) => {
    console.log("Resizing ", shape);
    let arrayShapes = this.state.arrayShapes;
    if (shape == "Rectangle") {
      arrayShapes[this.state.isSelected].width = width;
      arrayShapes[this.state.isSelected].height = height;
    } else {
      if (height == this.state.arrayShapes[this.state.isSelected].height) {
        arrayShapes[this.state.isSelected].width = width;
        arrayShapes[this.state.isSelected].height = width;
      } else if (width == this.state.arrayShapes[this.state.isSelected].width) {
        arrayShapes[this.state.isSelected].width = height;
        arrayShapes[this.state.isSelected].height = height;
      } else {
        if (height > width) {
          arrayShapes[this.state.isSelected].width = height;
          arrayShapes[this.state.isSelected].height = height;
        } else {
          arrayShapes[this.state.isSelected].width = width;
          arrayShapes[this.state.isSelected].height = width;
        }
      }
      if (shape == "Circle") {
        var temp = arrayShapes[this.state.isSelected].height;
        arrayShapes[this.state.isSelected].radius = temp / 2;
        arrayShapes[this.state.isSelected].x_cord = temp / 2;
        arrayShapes[this.state.isSelected].y_cord = temp / 2;
      }
      if (shape == "Triangle") {
        var temp = arrayShapes[this.state.isSelected].height;
        var newpolygon =
          "0," + temp + "," + temp / 2 + ",0," + temp + "," + temp;
        arrayShapes[this.state.isSelected].polygonPoints = newpolygon;
      }
    }

    this.setState({ arrayShapes });
  };
  onRotate = ({ rotate }) => {
    console.log(rotate);
    let arrayShapes = this.state.arrayShapes;
    arrayShapes[this.state.isSelected].rotate =
      arrayShapes[this.state.isSelected].fixed_angle + rotate;
    this.setState({ arrayShapes });
  };
  //    handleChangeComplete=(color,event)=>{

  //         this.setState({ background: color });

  // }
  onChangeComplete = (color, event) => {
    this.setState({ background: color.hex });
  };
  saveFunc = () => {
    var fileName=""+document.getElementById("file_name1").value;
    console.log(fileName);
   
    if (document.getElementById("file_name").value === " ") {
      const url = "https://drawingpad.test.bitpod.io/svc/api/Shapes/";

      console.log("saved");
      var a = { ...this.state };

      let data = a.arrayShapes.map((ele) => {
        ele.target = null;
        return ele;
      });
      console.log("State", JSON.stringify(data));
      let data1 = JSON.stringify(data);

      console.log("=====data to be pushed", data1);
      const options = {
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjhEMkE0MTczM0QwN0JBNkU2RTYwNTZFRUJDRThDRkQyMDc0NThCMDUiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJqU3BCY3owSHVtNXVZRmJ1dk9qUDBnZEZpd1UifQ.eyJuYmYiOjE1ODYxNDMzMTQsImV4cCI6MTU4NjIyOTcxNCwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5iaXRwb2QuaW8vYXV0aCIsImF1ZCI6WyJodHRwczovL2xvZ2luLmJpdHBvZC5pby9hdXRoL3Jlc291cmNlcyIsIk5vdGlmaWNhdGlvbiIsIlNoYXJlZCJdLCJjbGllbnRfaWQiOiJndHYrcTA0bHUvbDVaZkt5MHZXRkpqRHI5RzdHc0RhV1BpVml3cEowWUpzPSIsInN1YiI6ImFtYXJ0eWFrdW1hckBiaXRwb2QuaW8iLCJhdXRoX3RpbWUiOjE1ODYxMzYxMjQsImlkcCI6ImxvY2FsIiwic2NvcGUiOlsiTm90aWZpY2F0aW9uIiwib3BlbmlkIiwicHJvZmlsZSIsImVtYWlsIiwibm90aWZpY2F0aW9uIiwiYmFhcyIsIm9mZmxpbmVfYWNjZXNzIiwibm90aWZpY2F0aW9uIiwiYmFhcyIsIm9mZmxpbmVfYWNjZXNzIiwibm90aWZpY2F0aW9uIiwiYmFhcyIsIm9mZmxpbmVfYWNjZXNzIiwibm90aWZpY2F0aW9uIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.TCIZHW_DRswrdHznJdbaSnWQG2lBy8IWKbaTptaD8A3KIz0Li4cC0MxIlLO02q6PGyNwj8mYz7a0c00Qrn2-iMFGM-3EMwMnqlCGteQ8WpsNMXlKvwnUsfTaiuC03IaZFXS5ECS_2_4tWHCnBwmpDqnh5NjVcvdVLNxecxVt_h3HUVpJ1EoGwD3N-qlSlA2fd-ZFlExrsRe6aRhei4pzGH1S-bymU2meYkLQFgthzxOe8PZYOT6hzIThhVgaSu-1XvOZgP3FylqQ8OWgSBUuywJ2R0-sJH6pBiGQxlNZXvS5AUjgDm0Uxb49l1JlTfG0LeZQM_21csu2BFUpMnMViQ",
          "Content-Type": "application/json",
          Resolver: "requestHeader",
          "X-Org-Id": "1",
        },
      };

      axios
        .post(url, { State: data1,FileName:fileName }, options)
        .then((res) => {
          console.log("=====response=======", res);
          alert("your data is saved");
        })
        .catch((err) => {
          console.log("Error===", err);
        });
    }else{
    const url = "https://drawingpad.test.bitpod.io/svc/api/Shapes/"+document.getElementById("file_name").value;

    console.log("saved");
    a = { ...this.state };

    let data = a.arrayShapes.map((ele) => {
      ele.target = null;
      return ele;
    });
    console.log("State", JSON.stringify(data));
    let data1 = JSON.stringify(data);

    console.log("=====data to be pushed", data1);
    const options = {
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjhEMkE0MTczM0QwN0JBNkU2RTYwNTZFRUJDRThDRkQyMDc0NThCMDUiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJqU3BCY3owSHVtNXVZRmJ1dk9qUDBnZEZpd1UifQ.eyJuYmYiOjE1ODYxNDMzMTQsImV4cCI6MTU4NjIyOTcxNCwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5iaXRwb2QuaW8vYXV0aCIsImF1ZCI6WyJodHRwczovL2xvZ2luLmJpdHBvZC5pby9hdXRoL3Jlc291cmNlcyIsIk5vdGlmaWNhdGlvbiIsIlNoYXJlZCJdLCJjbGllbnRfaWQiOiJndHYrcTA0bHUvbDVaZkt5MHZXRkpqRHI5RzdHc0RhV1BpVml3cEowWUpzPSIsInN1YiI6ImFtYXJ0eWFrdW1hckBiaXRwb2QuaW8iLCJhdXRoX3RpbWUiOjE1ODYxMzYxMjQsImlkcCI6ImxvY2FsIiwic2NvcGUiOlsiTm90aWZpY2F0aW9uIiwib3BlbmlkIiwicHJvZmlsZSIsImVtYWlsIiwibm90aWZpY2F0aW9uIiwiYmFhcyIsIm9mZmxpbmVfYWNjZXNzIiwibm90aWZpY2F0aW9uIiwiYmFhcyIsIm9mZmxpbmVfYWNjZXNzIiwibm90aWZpY2F0aW9uIiwiYmFhcyIsIm9mZmxpbmVfYWNjZXNzIiwibm90aWZpY2F0aW9uIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.TCIZHW_DRswrdHznJdbaSnWQG2lBy8IWKbaTptaD8A3KIz0Li4cC0MxIlLO02q6PGyNwj8mYz7a0c00Qrn2-iMFGM-3EMwMnqlCGteQ8WpsNMXlKvwnUsfTaiuC03IaZFXS5ECS_2_4tWHCnBwmpDqnh5NjVcvdVLNxecxVt_h3HUVpJ1EoGwD3N-qlSlA2fd-ZFlExrsRe6aRhei4pzGH1S-bymU2meYkLQFgthzxOe8PZYOT6hzIThhVgaSu-1XvOZgP3FylqQ8OWgSBUuywJ2R0-sJH6pBiGQxlNZXvS5AUjgDm0Uxb49l1JlTfG0LeZQM_21csu2BFUpMnMViQ",
        "Content-Type": "application/json",
        Resolver: "requestHeader",
        "X-Org-Id": "1",
      },
    };

    axios
      .patch(url, { State: data1,FileName:fileName }, options)
      .then((res) => {
        console.log("=====response=======", res);
        alert("your data is saved");
      })
      .catch((err) => {
        console.log("Error===", err);
      });
    }
  };
  openCanvas = () => {
    let id = document.getElementById("file_name").value;
    const url = "https://drawingpad.test.bitpod.io/svc/api/Shapes/" + id;
    const options = {
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjhEMkE0MTczM0QwN0JBNkU2RTYwNTZFRUJDRThDRkQyMDc0NThCMDUiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJqU3BCY3owSHVtNXVZRmJ1dk9qUDBnZEZpd1UifQ.eyJuYmYiOjE1ODYxNDMzMTQsImV4cCI6MTU4NjIyOTcxNCwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5iaXRwb2QuaW8vYXV0aCIsImF1ZCI6WyJodHRwczovL2xvZ2luLmJpdHBvZC5pby9hdXRoL3Jlc291cmNlcyIsIk5vdGlmaWNhdGlvbiIsIlNoYXJlZCJdLCJjbGllbnRfaWQiOiJndHYrcTA0bHUvbDVaZkt5MHZXRkpqRHI5RzdHc0RhV1BpVml3cEowWUpzPSIsInN1YiI6ImFtYXJ0eWFrdW1hckBiaXRwb2QuaW8iLCJhdXRoX3RpbWUiOjE1ODYxMzYxMjQsImlkcCI6ImxvY2FsIiwic2NvcGUiOlsiTm90aWZpY2F0aW9uIiwib3BlbmlkIiwicHJvZmlsZSIsImVtYWlsIiwibm90aWZpY2F0aW9uIiwiYmFhcyIsIm9mZmxpbmVfYWNjZXNzIiwibm90aWZpY2F0aW9uIiwiYmFhcyIsIm9mZmxpbmVfYWNjZXNzIiwibm90aWZpY2F0aW9uIiwiYmFhcyIsIm9mZmxpbmVfYWNjZXNzIiwibm90aWZpY2F0aW9uIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.TCIZHW_DRswrdHznJdbaSnWQG2lBy8IWKbaTptaD8A3KIz0Li4cC0MxIlLO02q6PGyNwj8mYz7a0c00Qrn2-iMFGM-3EMwMnqlCGteQ8WpsNMXlKvwnUsfTaiuC03IaZFXS5ECS_2_4tWHCnBwmpDqnh5NjVcvdVLNxecxVt_h3HUVpJ1EoGwD3N-qlSlA2fd-ZFlExrsRe6aRhei4pzGH1S-bymU2meYkLQFgthzxOe8PZYOT6hzIThhVgaSu-1XvOZgP3FylqQ8OWgSBUuywJ2R0-sJH6pBiGQxlNZXvS5AUjgDm0Uxb49l1JlTfG0LeZQM_21csu2BFUpMnMViQ",
        "Content-Type": "application/json",
        Resolver: "requestHeader",
        "X-Org-Id": "1",
      },
    };
    axios
      .get(url, options)
      .then((res) => {
        let data = JSON.parse(res.data.State);
        console.log("====Respose", data);
        this.setState({ arrayShapes: data });
      })
      .catch((err) => {
        console.log("======error", err);
      });
  };

  render() {
    let toolbar_items = ["New", "Open", "Save"];
    let right_horizontal_bar_items = [];
    let left_horizontal_bar_items = [];

    toolbar_items.push(<button>qwerty</button>);
    left_horizontal_bar_items.push(<button></button>);
    right_horizontal_bar_items.push(
    //   <SketchPicker
    //     color={this.state.background}
    //     onChange={this.onChangeComplete}
    //   />
    );

    return (
      <div id="final_layout">
        <div id="toolbar" className=" z-depth-1">
          {this.createShapes()}
        </div>
        <button onClick={this.saveFunc} className="btn btn-primary">
          Save
        </button>
        <button onClick={this.openCanvas} className="btn btn-primary">
          Open
        </button>
        <input type="text" id="file_name" placeholder="enter file name"></input>
        <input type="text" id="file_name1" placeholder="file name to save"></input>

        <div id="center_body" className="row">
          <Shapes
            {...this.state}
            onDrag={this.onDrag}
            onResize={this.onResize}
            onRotate={this.onRotate}
            clicke={this.clicked}
            setTarget={this.setTarget}
            mouseHover={this.mouseHover}
            mouseLeave={this.mouseLeave}
            mousedown={this.mousedown}
            mouseup={this.mouseup}
            canvasmousedown={this.canvasmousedown}
            canvasmouseup={this.canvasmouseup}
          />
          {/* <div id="right_horizontal_bar" className="col s2 z-depth-1">{right_horizontal_bar_items}</div> */}
        </div>
      </div>
    );
  }
}
export default Layout;
