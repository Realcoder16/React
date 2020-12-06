import React from 'react';
import PropTypes from 'prop-types'
import './App.css';
import { Map } from "./Map"
import  Profile  from "./Profile"
import  Login  from "./Login"
import { Registration } from "./Registration"
import { Header } from "./Header"

import { connect } from "react-redux";


 


 class App extends React.Component {
  state = { currentPage: "Login" };

  navigateTo = (page) => {
   
      this.setState({ currentPage: page });
    }
  

 



    render() {
      const PAGES = {
        Map: () => <Map navigateTo={this.navigateTo} />,
        Profile: () => <Profile navigateTo={this.navigateTo} />,
        Login: () => <Login navigateTo={this.navigateTo} />,
        Registration: () => <Registration navigateTo={this.navigateTo} />,
      };
      const Page = PAGES[this.state.currentPage];
      return (
        
          <>
            <Header navigateTo={this.navigateTo} />
            <main>
              <section>
                <Page />
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
