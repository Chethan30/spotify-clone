import React from "react";
import "./SidebarOption.css";

function SidebarOption({ Icon, upper, text, active }) {
  return (
    <div className={`sidebarOption`}>
      <Icon className={`${active ? "active" : ""} Icon`} />
      <div className={`${upper ? "upper" : ""} ${active ? "active" : ""}`}>
        {text}
      </div>
    </div>
  );
}

export default SidebarOption;
