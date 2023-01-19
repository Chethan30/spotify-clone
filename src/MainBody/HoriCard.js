import React, { useState } from "react";
import "./HoriCard.css";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

function HoriCard({ title, img, desc }) {
  const [toShow, setToShow] = useState(false);

  const changeShow = () => {
    setToShow(!toShow);
  };

  return (
    <div
      className="horiCard"
      onMouseEnter={changeShow}
      onMouseLeave={changeShow}
    >
      <div className="hori-img">
        <img src={img} alt="" />
        {toShow && <PlayCircleIcon className="hori-button" fontSize="larger" />}
      </div>
      <div className="hori-title">{title}</div>
      <div className="hori-desc">{desc}</div>
    </div>
  );
}

export default HoriCard;
