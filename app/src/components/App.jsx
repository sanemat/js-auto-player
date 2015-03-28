import React from 'react';

let App = React.createClass({

  render() {
    let { flux } = this.props;

    return (
        <div>
          Hello Components!
        </div>
    );
  }

});

export default App;
