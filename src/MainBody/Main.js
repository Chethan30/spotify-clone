import React from "react";
import HoriCard from "./HoriCard";
import "./Main.css";
import RectGrid from "./RectGrid";

function Main() {
  const playlists = [
    {
      cover:
        "https://images.pexels.com/photos/2170729/pexels-photo-2170729.jpeg?cs=srgb&dl=pexels-olof-nyman-2170729.jpg&fm=jpg",
      name: "Somke off",
      desc: "Random",
    },
    {
      cover:
        "http://c.saavncdn.com/427/Kantara-Kannada-2022-20221205200722-500x500.jpg",
      name: "Kantara",
      desc: "Random",
    },
    {
      cover:
        "https://c.saavncdn.com/892/Gandhada-Gudi-Kannada-2022-20221111125327-500x500.jpg",
      name: "Gandadagudi",
      desc: "Random",
    },
    {
      cover:
        "https://upload.wikimedia.org/wikipedia/en/5/5a/KSI_-_All_Over_the_Place.png",
      name: "KSI",
      desc: "Random",
    },
  ];

  return (
    <div className="main-comp">
      <h2>Favorites</h2>
      {/* Rectangle Card */}
      <RectGrid />
      {/* Square Card */}
      <h2>Jump Back In</h2>
      <div className="hori-grid">
        {playlists.map((song, index) => (
          <HoriCard title={song.name} img={song.cover} desc={song.desc} />
        ))}
      </div>
    </div>
  );
}

export default Main;
