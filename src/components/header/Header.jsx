import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import style from './Header.module.css'
import { FaBars, FaTimes } from "react-icons/fa";



const Header = () => {
    const [showNavbar, setShowNavbar] = useState(true);

  return (
    <div className={style.container}>
<<<<<<< HEAD
    
     <NavLink to="/">
=======
      <NavLink to="/" > 
>>>>>>> 1b0b697955d0185cede9ea938bf977bb7af3181d
        <div className={style.logo}>
          <img src="https://www.pngall.com/wp-content/uploads/2018/04/Gym-Free-Download-PNG.png" alt="imge" />
          <span>OX GYM</span>
        </div>
<<<<<<< HEAD
      </NavLink>
=======
        </NavLink>
>>>>>>> 1b0b697955d0185cede9ea938bf977bb7af3181d

        <div className={showNavbar ? style.navbar : style.responsive}>
            <NavLink to="/aboutus" className={style.list}>ABOUT</NavLink>
            <NavLink to="/pricing" className={style.list}>PLANS</NavLink>
            <NavLink to="/training" className={style.list}>TRAINING</NavLink>
<<<<<<< HEAD
            <NavLink to="/register" className={style.join}>JOIN US</NavLink>
=======
            <NavLink to="/login" className={style.join}>JOIN US</NavLink>
            
>>>>>>> 1b0b697955d0185cede9ea938bf977bb7af3181d
        </div>

            <div className={style.bars_close} onClick={() => setShowNavbar(!showNavbar)}>
                <FaBars />
                </div>
            
        </div>
 
  )
}

export default Header