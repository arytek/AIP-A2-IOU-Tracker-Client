import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Views/Home';
import About from './Views/About';
import Product from './Views/Product';
import SignUpFormContainer from './Components/SignUpFormContainer/SignUpFormContainer';
import { Account } from './Contexts/Accounts';

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Account>
        <Router>
          <Header />

          <div className="p-3">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/products/:id">
                <Product />
              </Route>
              <Route path="/signup">
                <SignUpFormContainer />
              </Route>
            </Switch>
          </div>

          <Footer />
        </Router>
      </Account>
    </div>
  );
}

export default App;
