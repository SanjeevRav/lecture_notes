import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Lecture1 from "./Lectures/Lecture1";
import Lecture2 from "./Lectures/Lecture2";

function Sidebar() {
  let styles = {
    textTransform: "capitalize"
  }
  return (
    <section className="container">
      <div style={styles} className="nav nav-pills">
        <Link to="/home/lecture1"  className="nav-link bg-dark text-white  me-1 mb-1 content-nav">
          What is React?
        </Link>
        <Link  to="/home/lecture2"  className="nav-link bg-dark text-white  me-1 mb-1 content-nav">
          states, hooks and props
        </Link>
        <Link to="/home/lecture3"  className="nav-link bg-dark text-white  me-1 mb-1 content-nav">
          useState
        </Link>
        <Link to="/home/lecture4"  className="nav-link bg-dark text-white  me-1 mb-1 content-nav">
          useEffect
        </Link>
      </div>
      <br />
      <br />
      <div className="tab-content mx-1" id="v-pills-tabContent">
        <Switch>
        <Route path="/home/lecture4">
            <h1>Lecture4</h1>
          </Route>
        <Route path="/home/lecture3">
            <h1>Lecture3</h1>
          </Route>
          <Route path="/home/lecture2">
            <Lecture2/>
          </Route>
          <Route path="/home/lecture1">
            <Lecture1 />
          </Route>
          <Route path="/">
            <Lecture1 />
          </Route>
        </Switch>
      </div>
    </section>
  );
}

export default Sidebar;
