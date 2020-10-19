import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Views/Home';
import About from './Views/About';
import Request from './Views/Request';
import SignUpFormContainer from './Components/SignUpFormContainer/SignUpFormContainer';
import { Account } from './Contexts/Accounts';
import Profile from './Components/Profile';
import Leaderboard from './Components/LeaderBoard';


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
              <Route path="/requests/:id">
                <Request />
              </Route>
              <Route path="/signup">
                <SignUpFormContainer />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/leaderboard">
                <Leaderboard />
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
