import React from 'react';
import Flux from './Flux';
import App from './components/App.jsx';
import Config from './components/Config.jsx';
import Panel from './components/Panel.jsx';
import Router from 'react-router';

// On the server, we would create a new Flux instance on every request
let flux = new Flux();
let actions = flux.getActions('app');

import { DefaultRoute, Route } from 'react-router';

let routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="settings" path="/settings" handler={Config}/>
    <DefaultRoute name="panel" handler={Panel}/>
  </Route>
);

Router.run(routes, (Handler) => {
  React.render(<Handler flux={flux} />, document.getElementById('auto-player-app'));
});
