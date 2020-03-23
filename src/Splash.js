import React from 'react';
import logo from './logo_white.png';

class Splash extends React.Component {

  render () {
    return (
      <div className="Splash">
      <header className="Splash-header">
      <img src={logo} className="Splash-logo" alt="logo" />
      <p> Virtual Tour </p>
      </header>
      </div>
    );
  }
}

export { Splash };
