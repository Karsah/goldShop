import React from 'react';
import './App.css';
import Main from './Components/Main/Main';
import {Routes, Route} from 'react-router-dom';
import Products from "./Components/Categories/subCategories/products/products";
import SubCategory from "./Components/Categories/subCategories/SubCategory";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Main/>}>
              <Route path={`/:category`} element={<SubCategory/>}/>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
