import Sidebar from "./components/sidebar/Sidebar.jsx";
import Topbar from "./components/topbar/Topbar.jsx";
import "./app.css"
import Home from "./pages/home/Home.jsx";

function App() {
  return (
    <div>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Home/>
      </div>
    </div>
  );
}

export default App;
