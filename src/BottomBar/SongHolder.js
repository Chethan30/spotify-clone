import React from "react";
import "./SongHolder.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PictureInPictureAltIcon from "@mui/icons-material/PictureInPictureAlt";

function SongHolder() {
  return (
    <div className="songholder">
      <div className="infoholder">
        <img
          className="imgholder"
          src="http://c.saavncdn.com/427/Kantara-Kannada-2022-20221205200722-500x500.jpg"
          alt=""
        />
        <div className="info">
          <div className="songname">Singara Siriye</div>
          <div className="songartist">Rishabh Shetty</div>
        </div>
      </div>
      <div className="leftctrls">
        <FavoriteBorderIcon />
        <PictureInPictureAltIcon />
      </div>
    </div>
  );
}

export default SongHolder;
