import "./App.css";
import Sidebar from "./Sidebar/Sidebar";
import BottomBar from "./BottomBar/BottomBar";
import Main from "./MainBody/Main";

function App() {
  return (
    <div className="App">
      <div className="main">
        {/* Sidebar */}
        <Sidebar />
        {/* Main Body */}
        <Main />
      </div>

      {/* Bottom Player */}
      <div className="bottom">
        <BottomBar />
      </div>
    </div>
  );
}

export default App;
