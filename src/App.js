import React from 'react'
import './App.css'
import Home from "./components/Home";
import CopyApp from "./CopyApp";
import Search from "./components/Search";
import { Route} from 'react-router-dom';


class App extends React.Component {
    state = {
        showSearchPage: false
    }

    render() {
        return (
            <div>
                    <Route path="/" exact={true} render={() => (
                        <Home />
                    )}/>
                    <Route path="/search" render={() => (
                        <Search/>
                    )}/>
                    <Route path="/teste" render={() => (
                        <CopyApp />
                    )}/>
            </div>
        )
    }
}

export default App;

