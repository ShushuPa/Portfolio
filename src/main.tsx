import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router";
import './styles/Home.css';
import Home from './pages/Home.tsx';
import LandingEs from './pages/LandingEs.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/es" element={<LandingEs />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
