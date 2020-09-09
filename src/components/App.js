import React, { Component } from 'react';
import logo from '../../public/logo.svg';
import "./App.css";
import styled from 'styled-components'


class App extends Component {
    render(){
        return(
            <div className="container">
                <img src={logo} alt="react logo"/>
                <h3 className="header">Welcome to React boilerplate</h3>
                <p>To start working edit <code>src/components/App.js</code></p>
            </div>
        )
    }
}

export default App;