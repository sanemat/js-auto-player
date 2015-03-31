import React from 'react';
import Title from './Title.jsx';
import Router from 'react-router';

import { Link, RouteHandler } from 'react-router';

let App = React.createClass({

  render() {
    let { flux } = this.props;

    return (
      <div>
        <header>
          <Title flux={flux} />
          <ul>
            <li><Link to="app">Panel</Link></li>
            <li><Link to="settings">Config</Link></li>
          </ul>
        </header>
        {/* this is the important part */}
        <RouteHandler/>
      </div>
    );
  }

});

export default App;
