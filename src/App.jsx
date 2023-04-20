<<<<<<< HEAD
import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import AboutUs from './Pages/AboutUs/AboutUs'
import Login from'./Pages/Login/Login'
import Training from './Pages/Training/Training'
import Register from './Pages/Register/Register'
import UserProfile from './Pages/UserProfile/UserProfile'
=======
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/home/Home";
import Login from "./Pages/login/Login";
import About from "./Pages/AboutUs/About-Us";
import Pricing from "./Pages/pricing/Pricing";
import TrainingPrograms from "./Pages/training/TrainingProgram";
import Register from "./Pages/register/Register";
>>>>>>> 1b0b697955d0185cede9ea938bf977bb7af3181d

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/training" element={<Training/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/userprofile" element={<UserProfile/>}/>
        <Route path="*" element={<h1>404 Not Found</h1>}/>
=======
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/training" element={<TrainingPrograms />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/register" element={<Register />} />
>>>>>>> 1b0b697955d0185cede9ea938bf977bb7af3181d
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
