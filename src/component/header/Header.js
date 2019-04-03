import React, { Component } from 'react';
import Logo from './Logo'
import NavigationLinks from './NavigationLinks';

import './header.css';

class Header extends Component{
  render(){
    return (
      <header className="header">
        <Logo></Logo>
        <NavigationLinks></NavigationLinks>
      </header>
    );
  }
}

export default Header;