import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginForm from "./pages/LoginForm";
import SignUpForm from "./pages/SignUpForm";

function App() {
  return (
    <BrowserRouter>
    {/*<nav className="navbar">
    <Link to="/" className="navbarLinks">Home</Link>
    <Link to="/about" className="navbarLinks">About</Link>
    <Link to="/contact" className="navbarLinks">Contact</Link>
    <Link to="/products" className="navbarLinks">Products</Link>
  </nav>*/}
      <Routes>
        <Route path="/" element={<LoginForm/>} />
        <Route path="/signup" element={<SignUpForm/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
