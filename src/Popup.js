import React from "react";
import Popup from "reactjs-popup";

const PopupVideo = () => (
  <Popup trigger={<button>Trigger</button>} position="center center" modal="true">
    {close => (
      <div>
        <iframe src="https://www.youtube.com/embed/q86g1aop6a8?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <a className="close" onClick={close}>
          &times;
        </a>
      </div>
    )}
  </Popup>
);

export default PopupVideo;
