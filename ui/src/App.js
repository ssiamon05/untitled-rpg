import React, { useState } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import BeginGame from './gameModules/BeginGame';
import Game from './gameModules/Game';

function App() {
  const mainStore = {
    gameStart: false
  }
  const [storeState, uStoreSate] = useState(mainStore);
  return (
    <div className="app">
      <header>
        <h1>UNTITLED RPG</h1>
      </header>
      <Routes>
        <Route path='/' element={<BeginGame props={uStoreSate} />} />
        <Route path='/game' element={<Game props={storeState, uStoreSate} />} />
      </Routes>
    </div>
  );
}

export default App;
