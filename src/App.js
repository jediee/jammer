import React from 'react';
import SearchBar from './Components/SearchBar/SearchBar.js';
import SearchResults from './Components/SearchResults/SearchResults.js';
import PlayList from './Components/PlayList/PlayList.js';
import Spotify from './Components/Spotify.js';

import './App.css';

const clientID = "2cc0a920e21246ee90f36624a5bab8f0";
const secret = "baa5118e09dc46a1851a0e26573e89e9";


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {SearchResults: [], playlistName: "playlistName", playlistTracks: "playlistTracks"}

    //this.setSearchResults = this.setSearchResults.bind(this);

  }

/*
setSearchResults(searchResultsArray){


  this.setState(SearchResults: searchResultsArray);

}
*/
//
//<Spotify SearchResults={this.setSearchResults()} />

  render() {


    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">

         <SearchBar />
          <div className="App-playlist">
          <SearchResults SearchResults={this.state.SearchResults}/>


           <PlayList playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
