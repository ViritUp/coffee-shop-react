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
    data: projectList,
    term: '',
    filter: 'all'
  }


  searchProd = (items, term) => {
    if (term.length === 0) {
      return items
    }

    return items.filter(item => {
      return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term})
  }

  filterPost = (items, filter) => {
    switch (filter) {
      case 'brazil':
        return items.filter(item => item.country.toLowerCase() === 'brazil');
      case 'kenya':
        return items.filter(item => item.country.toLowerCase() === 'kenya');
      case 'columbia':
        return items.filter(item => item.country.toLowerCase() === 'columbia');
      default:
        return items;
    }
  }

  onFilterSelect = (filter) => {
    if (filter === this.state.filter) {
      this.setState({filter: 'all'})
    } else {
      this.setState({filter})
    }
  }


  render = () => {
    const visibleData = this.filterPost(this.searchProd(this.state.data, this.state.term), this.state.filter);

    return (
      <div className="App">
        <Router>
          <ScrollToTop />
  
          <Navbar />
  
          <Routes>
            <Route path='/' element={<Home data={this.state.data} />} />
            <Route path='/coffee' element={<Coffee data={visibleData} 
              term={this.state.term}
              onUpdateSearch={this.onUpdateSearch} 
              filter={this.state.filter}
              onFilterSelect={this.onFilterSelect} />} />
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
