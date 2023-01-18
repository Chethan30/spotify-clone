import React from "react";
import "./RectGrid.css";
import RectCard from "./RectCard";

function RectGrid() {
  const playlists = [
    {
      cover: "https://pbs.twimg.com/media/EjMLLZhXsAMMya2.jpg",
      name: "Album Name",
    },
    {
      cover:
        "https://images.pexels.com/photos/2170729/pexels-photo-2170729.jpeg?cs=srgb&dl=pexels-olof-nyman-2170729.jpg&fm=jpg",
      name: "Album Name",
    },
    {
      cover:
        "http://c.saavncdn.com/427/Kantara-Kannada-2022-20221205200722-500x500.jpg",
      name: "Kantara",
    },
    {
      cover:
        "https://c.saavncdn.com/892/Gandhada-Gudi-Kannada-2022-20221111125327-500x500.jpg",
      name: "Gandadagudi",
    },
    {
      cover:
        "https://upload.wikimedia.org/wikipedia/en/5/5a/KSI_-_All_Over_the_Place.png",
      name: "KSI",
    },
  ];

  return (
    <div className="rectbg">
      {playlists.map((playlist, index) => (
        <RectCard key={index} cover={playlist.cover} name={playlist.name} />
      ))}
      {/* <RectCard cover={"https://pbs.twimg.com/media/EjMLLZhXsAMMya2.jpg"} name={"Album Name"}/> */}
    </div>
  );
}

export default RectGrid;
