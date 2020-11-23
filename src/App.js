import React from 'react';
import './App.css';
import{Switch,Route } from 'react-router-dom'
import Haeder from './Haeder'
import Home from'./Home'

// import Items from'./Products'

function App() {
  return <main>
    <Haeder/>
<Switch>
  <Route path='/'exact component={Home}/>
  {/* <Route path='/items'exact component={Items}/> */}

</Switch>
  </main>
}

export default App;
