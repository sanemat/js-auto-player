import React from 'react';
import Title from './Title.jsx';
import SearchBox from './SearchBox.jsx';
import FilterBox from './FilterBox.jsx';
import Player from './Player.jsx';

let App = React.createClass({

  render() {
    let { flux } = this.props;

    return (
      <div>
        <Title flux={flux} />
        <SearchBox flux={flux} />
        <FilterBox flux={flux} />
        <Player flux={flux} />
      </div>
    );
  }

});

export default App;
