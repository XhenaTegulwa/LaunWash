import './App.css';
import React, {Component} from 'react';
import Header from './Header';
import HomePage from './HomePage';
import Footer from './Footer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <HomePage />
        <Footer/>
      </div>
    );
  }
  
}

export default App;
