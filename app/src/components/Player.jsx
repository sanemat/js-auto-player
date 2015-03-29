import React from 'react';
import YouTube from 'react-youtube';

var url = 'https://www.youtube.com/watch?v=MzLJxkOF6Sc';

let Player = React.createClass({
  getInitialState: function() {
    return {
      url: url
    };
  },

  _onReady: function() {
    console.log('READY');
  },

  _onPlay: function() {
    console.log('PLAYING');
  },

  _onPause: function() {
    console.log('PAUSED');
  },

  _onEnd: function() {
    console.log('ENDED');
  },

  render: function() {
    let playerOptions = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <YouTube
        url={this.state.url}
        opts={playerOptions}
        onReady={this._onReady}
        onPlay={this._onPlay}
        onPause={this._onPause}
        onEnd={this._onEnd}
      />
    );
  }
});

export default Player;
