import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './component/Navbar';
import Register from './component/register';
import Login from './component/login';
import Whois from './component/whois';
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
        <Route path='/whois' exact component={Whois} />
        <Route path='/register' exact component={Register} />
        <Route path='/login' exact component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;