import React from 'react'
import {Route,Switch } from 'react-router-dom';
import Header from './Header';
import Home from './components/Menu/Home'
import About from './components/Menu/About'
import Services from './components/Menu/Services'
import Contact from './components/Menu/Contact'
import Footer from './Footer';
import error from './components/Menu/Error'

const App = () => {
  return (
    <>
      <Header />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/about" component={About} />
      <Route  path="/contact" component={Contact} />
      <Route path="" component={error} />
      </Switch>

      <Footer />

    </>
  )
}
export default App;
