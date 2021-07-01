import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import Header from './Header';
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Footer from './Footer';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/about" component={About} />
      <Route  path="/contact" component={Contact} />
      <Redirect to="/" />
      </Switch>

      <Footer />

    </>
  )
}
export default App;
