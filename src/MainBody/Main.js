import React from "react";
import "./Main.css";
import RectGrid from "./RectGrid";

function Main() {
  return (
    <div className="main-comp">
      <h2>Main Body</h2>
      {/* Rectangle Card */}
      <RectGrid />
      {/* Square Card */}
    </div>
  );
}

export default Main;
