import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import './App.css';

import Mood from "./Mood";
import Happy from "./Happy";
import Sad from "./Sad";
import Relaxed from "./Relaxed";
import Angry from "./angry";
import Nope from "./Nope";
import Street from "./Street";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Street />} />
        <Route path="/Mood" element={<Mood />} />
        <Route path="/Happy" element={<Happy />} />
        <Route path="/Sad" element={<Sad />} />
        <Route path="/angry" element={<Angry />} />
        <Route path="/Relaxed" element={<Relaxed />} />
        <Route path="/Nope" element={<Nope />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;