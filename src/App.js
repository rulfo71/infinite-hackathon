import { Route } from 'wouter'
import Faq from './pages/Faq';
import Home from './pages/Home';
import './App.css';

import Footer from './components/footer';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header />
      <Route
        component={Home}
        path='/'
      />
      <Route
        component={Faq}
        path='/faq'
      />
      <Footer />
    </div>
  );
}

export default App;
