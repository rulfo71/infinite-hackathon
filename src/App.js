import { Route } from 'wouter'
import Faq from './pages/Faq';
import Genesis from './pages/Genesis';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route
        component={Home}
        path='/'
      />
      <Route
        component={Faq}
        path='/faq'
      />
      <Route
        component={Genesis}
        path='/genesis'
      />
    </div>
  );
}

export default App;
