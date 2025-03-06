import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import User from "./Components/User/User";
import Github from "./Components/Github/Github";

function App() {

  return (
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:id" element={<User />} />
        <Route 
          path="/github" 
          element={<Github />}
          
        />
      </Routes>
      
      <Footer/>
    </>
  )
}

export default App
