import { Route } from 'wouter'
import Faq from './pages/Faq';
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
    </div>
  );
}

export default App;
