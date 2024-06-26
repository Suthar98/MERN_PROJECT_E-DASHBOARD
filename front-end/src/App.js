import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<h1>Product Component</h1>} />
          <Route path="/add" element={<h1>Product Component</h1>} />
          <Route path="/update" element={<h1>Product Component</h1>} />
          <Route path="/logout" element={<h1>Product Component</h1>} />
          <Route path="/profile" element={<h1>Product Component</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
