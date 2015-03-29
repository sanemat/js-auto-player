import React from 'react';
import Title from './Title.jsx';

let App = React.createClass({

  render() {
    let { flux } = this.props;

    return (
      <div>
        <Title flux={flux} />
        Hello Components!
      </div>
    );
  }

});

export default App;
