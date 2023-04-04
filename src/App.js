import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Login from "./pages/Login";
// import Signup from "./pages/Signup";
import About from "./pages/About.jsx";
import FruitsList from "./components/FruitsList";
// import Loggedin from "./pages/Loggedin";
import AddFruit from "./components/AddFruit";
import Footer from "./components/Footer";
import AuthProvider from "./pages/AuthContext";
import SignUp from "./pages/Signup";

function BuyButton() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/buy');
  }

  return (
    <button onClick={handleClick}>Buy Fruit</button>
  );
}

function App() {
  return (
    <AuthProvider> 
     
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up"  element={<SignUp/>} />
          <Route path="/sell"  element={<AddFruit />}/>
          <Route path="/buy" element={< FruitsList />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" />
        </Routes>
        <Footer />
        <BuyButton />
    
    </AuthProvider>
  );
}

export default App;
