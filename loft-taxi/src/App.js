import React from 'react';
import PropTypes from 'prop-types'
import './App.css';
import { Map } from "./Map"
import  Profile  from "./Profile"
import  Login  from "./Login"
import Registration from "./Registration"
import { Header } from "./Header"

import { connect } from "react-redux";
import {Link, Switch, Route} from 'react-router-dom'
import {PrivateRoute} from './PrivateRoute'



 


 class App extends React.Component {
  
    render() {
      
     
      return (
        
          <>
            <Header/>
            <main>
              <section>
               <Switch>
                 <Route exact path = '/' component = {Login}/>
                 <Route exact path = '/registration' component = {Registration}/>
                 <PrivateRoute  path = '/map' component = {Map}/>
                 <PrivateRoute  path = '/profile' component = {Profile}/>
                 </Switch>
              </section>
            </main>
          </>
        
      );
    }
  } 

App.propTypes = {
  navigateTo: PropTypes.func
};

export default App;
