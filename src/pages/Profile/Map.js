import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    overflow:'scroll',
    height: '50%',
    width: '50%'
};

class MapContainer extends Component {

 render (){
   return (
       <Map
       google={this.props.google}
       zoom={8}
       style={mapStyles}
       initialCenter={{lat: 0.0236, lng: 37.9062}}
        />
   );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCMU1w8nv2r-9mYa6QjB1gRyBNBUjN_Dj0'
})(MapContainer);

//TODO: Set API Key for google maps
