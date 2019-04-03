import React, { Component } from 'react';
import './App.css';

import Bookmark from './component/bookmark/Bookmark';
import Banner from './component/banner/Banner';
import Header from './component/header/Header';
import Footer from './component/footer/footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Banner></Banner>
        <Bookmark></Bookmark>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
