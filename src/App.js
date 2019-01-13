import React from 'react'
import './App.css'
import Home from "./components/Home";
import { Navbar, Jumbotron, Button } from 'react-bootstrap';


class App extends React.Component {

    render() {
        return (
            <div>
                   <Home/>
            </div>
        )
    }
}

export default App;

