import Home from "./components/pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Register/Register";
import Profile from "./components/pages/Profile/Profile";
import LoggedInProtect from "./components/ProctedRoute/LoggedInProtect";
import AuthProtect from "./components/ProctedRoute/AuthProtect";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        //this routes will work only if the user is not loggedIn
        <Route element={<LoggedInProtect />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        //this routes will work only if the user is loggedIn
        <Route element={<AuthProtect />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
