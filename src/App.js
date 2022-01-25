import Sidebar from "./components/sidebar/Sidebar.jsx";
import Topbar from "./components/topbar/Topbar.jsx";
import "./app.css"
import Home from "./pages/home/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList.jsx";

function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/users" element={<UserList/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
