import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import components
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Chat from './components/Chat/Chat';
import Snackbar from './components/Snackbar/Snackbar';

const App = () => {
  return (
    <BrowserRouter>
      <Snackbar />
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="dashboard" exact component={Dashboard} />
          <Route path="/chat/:room" component={Chat} />
          <Route path="/chat" component={Chat} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
