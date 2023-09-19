import React from 'react'
import { Switch, Route } from "react-router-dom";
import About from './Components/About';
import Users from './Components/Users';
import Home from './Components/Home';



function SwitchComponents() {
    return (
      <div style={{paddingTop: "4rem"}}>
                <Switch>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/users">
          <Users/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
      </div>
    )
}

export default SwitchComponents
