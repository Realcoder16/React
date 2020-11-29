import React from 'react';
import PropTypes from 'prop-types'
import './App.css';
import { Map } from "./Map"
import { ProfileWithAuth } from "./Profile"
import { LoginWithAuth } from "./Login"
import { Registration } from "./Registration"
import { Header } from "./Header"
import {withAuth} from './AuthContext'

  const PAGES = {
  Map: (props) => <Map {... props}/>,
  Profile: (props) =>  <ProfileWithAuth {... props}/>,
  Login: (props) => <LoginWithAuth {... props}/>,
  Registration: (props) =>  <Registration {... props} />,
 };



class App extends React.Component {

  state = { currentPage: "Login" }

  navigateTo = (page) => {
    if(this.props.isLoggedIn)
    {
      this.setState({ currentPage: page });
  
}else
{
  this.setState({currentPage: 'Login'});
}
    
  };
  render() { 

    return (
      <>
     <Header navigateTo={this.navigateTo}/>
               <main>
          <section>
          {PAGES[this.state.currentPage]({ navigate: this.navigateTo })}
          </section>
        </main>
      </>

    );
  }

} 

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default withAuth(App);
