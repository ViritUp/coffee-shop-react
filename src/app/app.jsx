import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import ScrollToTop from '../utils/scrollToTop'

import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

import Home from '../pages/home';
import Coffee from '../pages/coffee';
import Pleasure from '../pages/pleasure';
import CoffeeItem from '../pages/coffee-item';

import './app.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />

        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/coffee' element={<Coffee />} />
          <Route path='/coffee-item/:id' element={<CoffeeItem />} />
          <Route path='/pleasure' element={<Pleasure />} />
        </Routes>

        <Footer />

      </Router>
    </div>
  );
}

export default App;
