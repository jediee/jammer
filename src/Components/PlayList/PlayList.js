import React from 'react';
import {TrackList} from '../TrackList/TrackList.js';
import Playist from './PlayList.css';

const NewPlayList = "list";

class PlayList extends React.Component {

  render(){
    return(
      <div className="Playlist">
        <input defaultValue={NewPlayList}/>
        <TrackList playlistTracks={this.props.playlistTracks}/>
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  }
}


export default PlayList;
