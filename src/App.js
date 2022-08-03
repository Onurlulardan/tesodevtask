import './App.css';
import Home from './View/Home.js';
import { useState } from 'react';
import { MainContext, useContext } from "./Context"
import SearchResult from './View/SearchResult';
import { BrowserRouter,Routes, Route  } from "react-router-dom";
import Record from './View/Record';

function App() {
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const data = {
    filteredData,
    setFilteredData,
    searchQuery,
    setSearchQuery
  }

  return (
    <MainContext.Provider value={data} className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/SearchResult/:searchkey" element={<SearchResult />}></Route>
          <Route path="/Record" element={<Record />}></Route>
        </Routes>
    </BrowserRouter> 
    </MainContext.Provider>
  );
}

export default App;
