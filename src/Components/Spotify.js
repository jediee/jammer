import React from 'react';


class Spotify extends React.Component {


constructor(props){
  super(props)
  this.state = {tracks: [{id: "1", name:"name", album:"album", artist:"artist"}, {id: "2", name:"name", album:"album", artist:"artist"}]}

}

  render(){

    return (
    <div>
      {console.log(this.props)}
      {this.props.setSearchResults(this.state.tracks)}
    </div>
    );
  }
}

export default Spotify;
