import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Stores from './views/Stores';
import Skus from './views/Skus';
import Planning from './views/Planning';
import Charts from './views/Charts';
import NotFound from './views/NotFound';
import SideDrawer from './components/SideDrawer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SideDrawer />}>
          <Route index element={<Stores />} />
          <Route path="stores" element={<Stores />} />
          <Route path="skus" element={<Skus />} />
          <Route path="planning" element={<Planning />} />
          <Route path="charts" element={<Charts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
