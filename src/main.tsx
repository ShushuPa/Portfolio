import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router";
import './styles/Home.css';
import Home from './pages/Home.tsx';
import Landing from './pages/Landing.tsx';
import "./i18n/index.js";
import { ThemeProvider } from './hooks/useTheme.tsx';

createRoot(document.getElementById('root')!).render(
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
)
