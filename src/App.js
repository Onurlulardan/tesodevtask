import './App.css';
import Home from './View/Home.js';
import { useState } from 'react';
import { MainContext, useContext } from "./Context"
import SearchResult from './View/SearchResult';
import { HashRouter,BrowserRouter,Routes, Route  } from "react-router-dom";

function App() {
  const [filteredData, setFilteredData] = useState([]);

  const data = {
    filteredData,
    setFilteredData,
  }

  return (
    <MainContext.Provider value={data} className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/SearchResult" element={<SearchResult />}></Route>
        </Routes>
    </HashRouter> 
    </MainContext.Provider>
  );
}

export default App;
