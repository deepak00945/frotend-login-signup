import "./App.css"
import React from "react"
import { ReactDOM } from "react"
import Profile from "./components/profile/profile"
import Signup from "./components/signup/signup"
import Login from "./components/login/login"
import{ BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact="/login">loginpage</Route>
          <Route exact="/signup">signuppage</Route>
          <Route exact="/profile">Profile</Route>
        </Routes>
      </Router>
      <Profile />
      <Login />
      <Signup />
    </div>
  );
}

export default App;
