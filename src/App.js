import React from 'react';
import './App.css';
import BodyCarosoul from  './bodycarosel';
import NavBar from './NavBar';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div>
      <BodyCarosoul></BodyCarosoul>
      </div>
   
    </div>
  );
}

export default App;
