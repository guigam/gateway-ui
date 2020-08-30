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
import git from 'isomorphic-git'
// or
// import * as git from 'isomorphic-git'
// or
import {plugins, clone, commit, push} from 'isomorphic-git'

function App() {

    const dir = path.join(process.cwd(), 'test-clone')
    git.clone({ fs, http, dir, url: 'https://github.com/isomorphic-git/lightning-fs' }).then(console.log)
    await fs.promises.writeFile('/tutorial/README.md', `# TEST`)
    await git.add({ fs, dir: '/tutorial', filepath: 'README.md' })
    console.log('done')
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
