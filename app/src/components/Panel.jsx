import React from 'react';
import SearchBox from './SearchBox.jsx';
import FilterBox from './FilterBox.jsx';
import Player from './Player.jsx';

let Panel = React.createClass({
  render() {
    let { flux } = this.props;
    return (
      <div>
        <SearchBox flux={flux} />
        <FilterBox flux={flux} />
        <Player flux={flux} />
      </div>
    );
  }

});

export default Panel;
