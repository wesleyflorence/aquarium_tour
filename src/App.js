import React from 'react';
import './App.css';
import './Splash.css';
import './Popup.css';
import ScrollableAnchor, { goToAnchor, configureAnchors } from "react-scrollable-anchor";

import { Splash } from './Splash';
import { Tour } from './Tour';

configureAnchors({scrollDuration: 2000, keepLastAnchorHash: false})
class App extends React.Component {
  render() {
    return (
      <div className="App">
      <a href="#tour">
        <Splash />
      </a>
        <ScrollableAnchor id={"tour"}>
          <Tour />
        </ScrollableAnchor>
      </div>
    );
  }
}

export default App;
