import React, { useState } from "react";

import "./css/bootstrap-min.css";
import "./css/truelayer.css";
import "./css/main.css";
import "./css/mobile.css";

import { Navbar } from './components/Navbar';
import { Header, Filter } from './components/Header';
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
