import React from 'react';
import Popup from "reactjs-popup";
import aquarium_map from './assets/Map.png';
import pier59Pin from './assets/pins/pier59-pin.png';
import pier60Pin from './assets/pins/pier60-pin.png';
import lifePin from './assets/pins/life-pin.png';
import pugetPin from './assets/pins/puget-pin.png';
import mezzPin from './assets/pins/mezz-pin.png';
import boeingPin from './assets/pins/boeing-pin.png';
import galleryPin from './assets/pins/gallery-pin.png';
import pacificPin from './assets/pins/pacific-pin.png';
import './Tour.css';

class Tour extends React.Component {
  constructor() {
    super(
    );
    this.onClick = this.onClick.bind(this);
    this._popUpClosed = this._popUpClosed.bind(this);
    this.state = {
      name: 'React',
      open:false
    };
  }

  _popUpClosed(){
    this.setState({open: false});
  }

  onClick(url) {
    this.setState({
      open: true,
      videoUrl: url
    });
  }


  render() {
    return (
      <div className='Tour'>

      <Popup open={this.state.open} onClose={this._popUpClosed} position="center center" modal="true">
      <div>
      <iframe title="youtube-popup" src={this.state.videoUrl} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      </Popup>

      <div className='Tour-Map'>
      <img src={aquarium_map} className='Tour-Map-Image' alt="aquarium map"/>
      <button className='pier59' onClick={() => this.onClick("https://www.youtube.com/embed/cHjbQsWWOew")}><img src={pier59Pin} className='pin' alt="pin"/></button>
      <button className='pier60' onClick={() => this.onClick("https://www.youtube.com/embed/87CVAoNPbLM")}><img src={pier60Pin} className='pin' alt="pin"/></button>
      <button className='mezz' onClick={() => this.onClick("https://www.youtube.com/embed/nQp0A5Ey4RU")}><img src={mezzPin} className='pin' alt="pin"/></button>
      <button className='life' onClick={() => this.onClick("https://www.youtube.com/embed/-FeNdH0ylq4")}><img src={lifePin} className='pin' alt="pin"/></button>
      <button className='puget' onClick={() => this.onClick("https://www.youtube.com/embed/8ucbwaZfnH4")}><img src={pugetPin} className='pin' alt="pin"/></button>
      <button className='boeing' onClick={() => this.onClick("https://www.youtube.com/embed/yTn_Bw4Vs70")}><img src={boeingPin} className='pin' alt="pin"/></button>
      <button className='gallery' onClick={() => this.onClick("https://www.youtube.com/embed/4MSkt3FlYCc")}><img src={galleryPin} className='pin' alt="pin"/></button>
      <button className='pacific' onClick={() => this.onClick("https://www.youtube.com/embed/sDbuEj2P2ZM")}><img src={pacificPin} className='pin' alt="pin"/></button>
      </div>

      <ul className='Tour-List'>
      <li key="lifeOnTheEdge"><button onClick={() => this.onClick("https://www.youtube.com/embed/-FeNdH0ylq4")}>Life on the Edge</button></li>
      <li key="pugetSoundHall"><button onClick={() => this.onClick("https://www.youtube.com/embed/8ucbwaZfnH4")}>Puget Sound Hall</button></li>
      <li key="pier59"><button onClick={() => this.onClick("https://www.youtube.com/embed/cHjbQsWWOew")}>Pier 59</button></li>
      <li key="pier60"><button onClick={() => this.onClick("https://www.youtube.com/embed/87CVAoNPbLM")}>Pier 60</button></li>
      <li key="mezzaninelevel"><button onClick={() => this.onClick("https://www.youtube.com/embed/nQp0A5Ey4RU")}>Mezzanine Level</button></li>
      <li key="boeinglobby"><button onClick={() => this.onClick("https://www.youtube.com/embed/yTn_Bw4Vs70")}>Boeing Lobby</button></li>
      <li key="transitionalgallery"><button onClick={() => this.onClick("https://www.youtube.com/embed/4MSkt3FlYCc")}>Transitional Gallery</button></li>
      <li key="pacificcoralreef"><button onClick={() => this.onClick("https://www.youtube.com/embed/sDbuEj2P2ZM")}>Pacific Coral Reef</button></li>
      </ul>
      </div>
    );
  }
}

export { Tour };
