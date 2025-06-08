import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Tables from './pages/Tables';
import Charts from './pages/Charts';
import Calendar from './pages/Calendar';
import Kanban from './pages/Kanban';
import './index.css';

const App = () => (
  <ThemeProvider>
    <Sidebar />
    <Navbar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/tables" element={<Tables />} />
      <Route path="/charts" element={<Charts />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/kanban" element={<Kanban />} />
    </Routes>
  </ThemeProvider>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);