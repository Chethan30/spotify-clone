import React from "react";
import "./BottomBar.css";
import SongHolder from "./SongHolder";
import VolumeHolder from "./VolumeHolder";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";

function BottomBar() {
  return (
    <div className="bottomBar">
      <SongHolder />
      <div className="thecontrols">
        <ShuffleIcon className="thectrl" fontSize="larger" />
        <SkipPreviousIcon className="thectrl" fontSize="larger" />
        <PlayCircleIcon className="thectrl spl" fontSize="larger" />
        {/* <PauseCircleIcon className="thectrl" fontSize="larger"/> */}
        <SkipNextIcon className="thectrl" fontSize="larger" />
        <RepeatIcon className="thectrl" fontSize="larger" />
      </div>
      <VolumeHolder />
    </div>
  );
}

export default BottomBar;
