import React from 'react';
import Track from '../Track/Track.js';
import './TrackList.css';


export class TrackList extends React.Component {


constructor(props){
  super(props)
  this.state = {trackArray: []}
  this.setTrackArray = this.setTrackArray.bind(this);
}

setTrackArray(tracks){
  console.log(tracks)
  tracks.map(function(track){return <Track key={track.id} track={track}/>})
//  this.setState ({trackArray: tracks});

}
//{this.props.track.track.map(function(track){return <Track key={track.id} track={track}/>})}
//{this.setTrackArray(this.props.track)}
  render(){

    return(
      <div className="TrackList">
        {console.log(this.props)}
        {this.props.tracks.map(track => {

          return <Track key={track.id} track={track}/>;
        })}

      </div>
  );
  }
}

//export default TrackList;
