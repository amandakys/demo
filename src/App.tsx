import React, { useState } from 'react';
import logo from './logo.svg';
// import './App.css';
import "./css/bootstrap-min.css";
import "./css/truelayer.css";
import "./css/main.css";
import "./css/mobile.css";



import { Navbar } from './components/Navbar';
import { Content } from './components/Content';
import { Header, Filter } from './components/Header';
import { Article } from './components/Article';
import { ArticleList } from './components/ArticleList';
import { Footer } from './components/Footer';

function App() {
  const [filter, setFilter] = useState<Filter>(Filter.ALL);
  return (
    <div className="app">
      <div id="wrapper">
        <Navbar/>  
        <Header filter={filter} setFilter={(filter: Filter) => setFilter(filter)}/>
        {/* <Content/> */}
        <ArticleList filter={filter}/>
        <Footer/>
      </div> 
    </div>
  );
}

export default App;
