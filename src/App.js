
import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Carddetail from './components/Carddetail';
import Main from './components/Main'
import {ThemeProvider }from './components/ThemeProvider';


function App() {
 


  return (
 <ThemeProvider>
       
             <Switch> 
                <Route path="/" component={Main} exact />
                <Route path="/:name" component={Carddetail} />
            </Switch>
  
    </ThemeProvider>
  );
}

export default App;
