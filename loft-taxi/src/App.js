import React from 'react';
import './App.css';
import { Map } from "./Map"
import { Profile } from "./Profile"
import { Login } from "./Login"
import { Registration } from "./Registration"
import { Header } from "./Header"




class App extends React.Component {

  state = { currentPage: "Login" }

  navigateTo = (page) => {
    this.setState({ currentPage: page })
  };

  render() { 
  const PAGES = {
  Map: <Map/>,
  Profile: <Profile/>,
  Login: <Login navigateTo={this.navigateTo} />,
  Registration: <Registration navigateTo={this.navigateTo} />
}
    return (
      <>
     <Header navigateTo={this.navigateTo}/>
               <main>
          <section>
            {PAGES[this.state.currentPage]}
          </section>
        </main>
      </>

    );
  }

} 



export default App;
