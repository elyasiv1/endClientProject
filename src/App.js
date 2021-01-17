import React from 'react';
import './App.css';
import{Switch,Route } from 'react-router-dom'
import Haeder from './Haeder'
import Home from'./Home'
import OpenPage from './OpenPage'
import Login from './Login'

// import Items from'./Products'

function App() {
  return (
  <main>
    <Haeder/>
    <Switch>
      <Route path='/' exact component={OpenPage}/>
      <Route path='/Login' exact>
        <Login/>
      </Route>
      <Route path='/Home' exact component={Home}/>
    </Switch>
  </main>
  )
}

export default App;
