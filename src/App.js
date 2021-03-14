
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Carddetail from './components/Carddetail';
import Main from './components/Main'
import {ThemeProvider }from './components/ThemeProvider';


function App() {
 


  return (
 <ThemeProvider>
     
            <Switch>
                <Route path="/" component={Main} exact />
                <Route path="/:country" component={Carddetail} />
            </Switch>
  
    </ThemeProvider>
  );
}

export default App;
