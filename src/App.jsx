import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cover from './pages/Cover';
import About from './pages/About';
import Literatur from './pages/Literatur';
import Dashboard from './pages/Dashboard';
import Spasial from './pages/Spasial';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"          element={<Cover />} />
        <Route path="/about"     element={<About />} />
        <Route path="/literatur" element={<Literatur />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/spasial"   element={<Spasial />} />
      </Routes>
    </BrowserRouter>
  );
}
