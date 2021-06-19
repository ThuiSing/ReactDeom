import React from 'react'
import {Route,Switch } from 'react-router-dom';
import Header from './Header';
import Home from './components/Menu/Home'
import About from './components/Menu/About'
import Services from './components/Menu/Services'
import Contact from './components/Menu/Contact'
import Footer from './Footer';

const App = () => {
  return (
    <>
      <Header />

      <Switch>
      <Route exact path="/ReactDeom/" component={Home} />
      <Route path="/ReactDeom/services" component={Services} />
      <Route path="/ReactDeom/about" component={About} />
      <Route  path="/ReactDeom/contact" component={Contact} />
      </Switch>

      <Footer />

    </>
  )
}
export default App;
