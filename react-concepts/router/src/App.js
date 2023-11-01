import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage";
import AboutMe from "./components/AboutMe";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        {/* <a href="#" className="nav-item">Home</a>
        <a href="#" className="nav-item">About Me</a> */}
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/about-me" className="nav-item">
          About Me
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
