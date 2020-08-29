import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route, Link
} from "react-router-dom"
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Views/Home'
import About from './Views/About'
import Product from './Views/Product'
import MenuEnvironement from './Components/MenuEnvironement';

function App() {
    return (
        <div className="relative pb-10 min-h-screen">
            <Router>

                <Header/>

                <div className="p-3">
                    <MenuEnvironement/>
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/about">
                            <About/>
                        </Route>
                      <Route path="/intg">
                        <About/>
                      </Route>
                      <Route path="/uat">
                        <About/>
                      </Route>
                      <Route path="/prod">
                        <About/>
                      </Route>
                        <Route path="/products/:id">
                            <Product/>
                        </Route>
                    </Switch>
                </div>

                <Footer/>

            </Router>
        </div>
    );
}

export default App;
