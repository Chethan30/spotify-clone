import React, { useState } from "react";
import "./RectCard.css";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import { FastAverageColor } from "fast-average-color";

function RectCard({ cover, name }) {
  const [toShow, setToShow] = useState(false);
  const fac = new FastAverageColor();

  const changeShow = () => {
    setToShow(!toShow);
    fac.getColorAsync(cover).then((color) => {
      var root = document.querySelector(":root");
      root.style.setProperty("--spotify-custom", color.hex);
      console.log(color.hex);
    });
  };

  return (
    <div
      className="rectCard"
      onMouseEnter={changeShow}
      onMouseLeave={changeShow}
    >
      <div className="album-cover">
        <img src={cover} alt="" />
      </div>
      <div className="album-name">{name}</div>
      <div className="album-button">
        {toShow && <PlayCircleIcon className="ctrl-button" fontSize="larger" />}
        {/* <PauseCircleIcon className="ctrl-button" /> */}
      </div>
    </div>
  );
}

export default RectCard;
