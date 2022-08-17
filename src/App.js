import { HashRouter, Routes, Route } from "react-router-dom";

import Genesis from './pages/Genesis';
import Home from './pages/Home';
import './App.css';

function App() {
  console.log('process.env.PUBLIC_URL: ', process.env.PUBLIC_URL)
  console.log('process.env.NODE_ENV: ', process.env.NODE_ENV)
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/genesis" element={<Genesis />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
