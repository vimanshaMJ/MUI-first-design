import "./App.css";
import Feed from "./Components/Feed";
import Rightbar from "./Components/Rightbar";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div>
      <Sidebar />
      <Feed />
      <Rightbar />
    </div>
  );
}

export default App;
