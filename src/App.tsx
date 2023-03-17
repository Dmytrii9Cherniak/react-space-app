import React from 'react';
import './App.scss';
import MainPage from './components/main/MainPage';
import { Route, Routes } from 'react-router-dom';
import Favourites from './components/favourites/Favourites';

function App() {
  return (
    <div className="fullAppBlock">
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/favourites" element={<Favourites/>}/>
        </Routes>
    </div>
  );
}

export default App;
