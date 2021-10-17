import { Link, Route, HashRouter as Router } from "react-router-dom";
import React, { Component } from "react";
import employee from "./pages/employee";
import list from "./pages/list";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  bj(){
    alert("请从列表编辑页面进入")
  }
  render() {
    return (
      <div>
        <Router>
          <div>
            <div  style={{ display: "flex", flexDirection: "row" }}>
              <div style={{color:"black",borderColor:"grey",borderWidth:"1px" ,border: "solid", width: "90px", height: "40px" ,textAlign:"center",fontSize:"20px"}}>
                <Link style={{color:"black"}} to="/list">list</Link>
              </div>
              <div style={{ border: "solid", width: "90px", height: "40px",textAlign:"center",fontSize:"20px" }}>
                <div onClick={this.bj} style={{color:"black"}}>employee</div>
              </div>
            </div>
                
            <div>
              <Route path={"/list"} component={list}></Route>
              <Route path={"/employee"} component={employee}></Route>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
