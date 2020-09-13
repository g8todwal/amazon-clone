import React, {useEffect} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/homepage/HomePage';
import Checkout from './components/Checkout';
import Login from './components/Login';
import {useStateValue} from './context/StateProvider';
import {auth} from './Firebase.js';

function App() {

  const[{user}, dispatch] = useStateValue();
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      
      if(authUser) {
        dispatch({
          type:'SET_USER',
          user: authUser
        })
      } else {
          dispatch({
          type:'SET_USER',
          user: null
        })
      }
    });

    return () => {
      unsubscribe();
    }

  }, []);

  console.log("user is >>>> ", user);

  return (
    <div className="app">
      <Switch>
        <Route path="/checkout">
        	<Navbar />
          <Checkout />
        </Route>
        
        <Route path="/login" component={Login} /> 
        
        <Route path="/">
        	<Navbar />
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
