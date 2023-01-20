import React from "react";
import "./VolumeHolder.css";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import DevicesIcon from "@mui/icons-material/Devices";

function VolumeHolder() {
  return (
    <div className="volumeholder">
      <div className="rightctrls">
        <QueueMusicIcon />
        <DevicesIcon />
      </div>
      <div className="volume">
        <VolumeDownIcon className="speaker" />
        <input type="range" />
      </div>
    </div>
  );
}

export default VolumeHolder;
