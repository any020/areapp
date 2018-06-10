import React, { Component } from 'react';
import Body from './components/body.js';
import './App.css';

const Header = () => <h1>Heu</h1>;

//const Body = ({ msg }) => <div> {msg} </div>;

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Body msg="hei are" />
            </div>
        );
    }
}

export default App;
