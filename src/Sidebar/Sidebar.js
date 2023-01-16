import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import OtherHousesSharpIcon from "@mui/icons-material/OtherHousesSharp";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import LibraryMusicSharpIcon from "@mui/icons-material/LibraryMusicSharp";
import LibraryAddSharpIcon from "@mui/icons-material/LibraryAddSharp";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import BookmarkIcon from "@mui/icons-material/Bookmark";

function Sidebar() {
  let lists = [
    "Item1 ",
    "Item2 ",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
  ];
  return (
    <div className="sidebar">
      {/* Nav Bar */}
      <div className="navBar">
        <SidebarOption
          Icon={OtherHousesSharpIcon}
          text={"Home"}
          upper={false}
          active={true}
        />
        <SidebarOption Icon={SearchSharpIcon} text={"Search"} upper={false} />
        <SidebarOption
          Icon={LibraryMusicSharpIcon}
          text={"Library"}
          upper={false}
          active={false}
        />
        <br />
        <SidebarOption
          Icon={LibraryAddSharpIcon}
          text={"Create Playlist"}
          upper={true}
          active={false}
        />
        <SidebarOption
          Icon={FavoriteSharpIcon}
          text={"Liked Songs"}
          upper={true}
          active={false}
        />
        <SidebarOption
          Icon={BookmarkIcon}
          text={"Your Episodes"}
          upper={true}
          active={false}
        />
      </div>
      {/* Playlist */}
      <div className="playlist">
        {lists?.map((item, index) => (
          <div className="list-item" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
