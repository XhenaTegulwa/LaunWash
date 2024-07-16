import './App.css';
import React, {Component} from 'react';
import Header from './Header';
import HomePage from './HomePage';
import Footer from './Footer';
import WashFold from "./Our_Services/wash-fold";


class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        {/* <HomePage /> */}
        <WashFold />
        <Footer/>
      </div>
    );
  }
  
}

export default App;
