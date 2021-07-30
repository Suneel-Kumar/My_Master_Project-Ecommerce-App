import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Homepage from './pages/homepage/homepage.component';
import Shoppage from './pages/shop/shop.component';
import Header from './component/header/header.component'
import SignInSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth } from './firebase/firebase.utils'
import './App.css'


class App extends Component {
  constructor(){
    super();

    this.state = {
      CurrentUser : null
    }
  }

  unsubscribeFromAuth = null
  componentDidMount(){
    this.unsubscribeFromAuth =  auth.onAuthStateChanged(user => {
      console.log(user, "user**")
      this.setState({ CurrentUser : user})
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.CurrentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shoppage} />
          <Route path='/signIn' component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}
export default App;