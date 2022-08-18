import { HashRouter, Routes, Route } from "react-router-dom";

import Genesis from './pages/Genesis';
import Home from './pages/Home';
import './App.css';
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <HashRouter>
      <div className="App" id='outer-container' >
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <div id='page-wrap' className="page-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/genesis" element={<Genesis />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
