import React from 'react';
import map from './assets/Map.png';
import './Tour.css';
import PopupVideo from './Popup';

class Tour extends React.Component {
  render() {
    return (
      <div className='Tour'>
      <PopupVideo />
      <ul className='Tour-List'>
      <li key="lifeOnTheEdge"><a href='https://google.com'> Life on the Edge</a></li>
      <li key="pugetSoundHall">Puget Sound Hall</li>
      <li key="pier59">Pier 59</li>
      <li key="pier60">Pier 60</li>
      <li key="mezzanineLevel">Mezzanine Level</li>
      <li key="boeingLobby">Boeing Lobby</li>
      </ul>
      <img src={map} className='Tour-Map' alt="aquarium map" />
      </div>
    );
  }
}

export { Tour };
