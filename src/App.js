import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About.jsx";
import FruitsList from "./components/FruitsList";
import Loggedin from "./pages/Loggedin";



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/sign-in" element={<Loggedin />} />
          <Route path="/sign-up"  element={<Signup />} />
          <Route path="/delivery"  element={<Login />}/>
          <Route path="/sell" element={< FruitsList />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
