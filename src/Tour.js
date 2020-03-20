import React from 'react';
import map from './Map.png';
import './Tour.css';

class Tour extends React.Component {
  render() {
    return (
    <div className='Tour'>
    Life on the Edge
    Puget Sound Hall
    Pier 59
    Pier 60
    Mezzanine Level
    Boeing Lobby
        <img src={map} className='Tour-Map' alt="aquarium map" />
    </div>
    );
  }
}

export { Tour };
