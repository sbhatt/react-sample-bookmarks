import React, {Component} from 'react';

import logoImage from './logo.jpg';
import './header.css'

class Logo extends Component {

  render(){
    return(
      <a>
        <img src={logoImage} className="logo"></img>
      </a>
    );
  }

}

export default Logo;