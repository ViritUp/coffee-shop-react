import { Component } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import ScrollToTop from '../utils/scrollToTop'

import projectList from '../heplers/project-list'

import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

import Home from '../pages/home';
import Coffee from '../pages/coffee';
import Pleasure from '../pages/pleasure';
import CoffeeItem from '../pages/coffee-item';

import './app.scss';



class App extends Component {
  state = {
    data: projectList
  }

  render = () => {
    return (
      <div className="App">
        <Router>
          <ScrollToTop />
  
          <Navbar />
  
          <Routes>
            <Route path='/' element={<Home data={this.state.data} />} />
            <Route path='/coffee' element={<Coffee data={this.state.data} />} />
            <Route path='/coffee-item/:id' element={<CoffeeItem data={this.state.data} />} />
            <Route path='/pleasure' element={<Pleasure data={this.state.data} />} />
          </Routes>
  
          <Footer />
  
        </Router>
      </div>
    );
  }
}

export default App;
