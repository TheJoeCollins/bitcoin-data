import React, {useEffect} from 'react';
import axios from "axios";
import {BrowserRouter, Route, Link} from "react-router-dom"
import {HomeRoute}from "./routes/HomeRoute"
import {AboutRoute} from './routes/AboutRoute'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <div>
              <Link to='/'>Home</Link>
              <Link to='/about'>About</Link>
          </div>
          <Route path='/' exact component={HomeRoute} />
          <Route path='/about' component={AboutRoute} />
      </BrowserRouter>
    </div>
  );
}



export default App;

//yarn add node-sass
//yarn add axios

//https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty