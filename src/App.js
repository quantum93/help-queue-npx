import React from 'react';
import Header from './components/Header';
import TicketList from './components/TicketList';
import NewTicketForm from './components/NewTicketForm';
import Error404 from './components/Error404';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={TicketList} />
        <Route path='/newticket' component={NewTicketForm} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
