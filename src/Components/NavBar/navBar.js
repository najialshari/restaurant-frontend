import React  ,{useRef} from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';
import { FaTimes, FaBars } from 'react-icons/fa';
import { GiBowlOfRice} from 'react-icons/gi';
import logo from  '../../Images/logo6.png'

// import { useSelector, useDispatch } from "react-redux";

function NavBar() {
    //   const dispatch = useDispatch();
    const navRef = useRef ();
    const btnRef = useRef ();
    const showNavMenu = () => {
        navRef.current.classList.toggle("responsive_nav")
        btnRef.current.classList.toggle("responsive_btn")
    }
    return (
        
        <nav className='navBar' >
            <div className='navBar-Logo' >
                <Link className='navLinkLogo' to={'/'}><img src={logo} alt=''/></Link>
            </div>
            <button className='nav-btn ' ref={btnRef}
            onClick={showNavMenu}><FaBars /></button>
            <div className='' ref={navRef}>
                <ul className='menu-List'>
                    <li>
                        <Link className='navLink' to={'/'} >Home</Link>
                    </li>
                    <li>
                        <Link className='navLink' to={'/category'}>Categories</Link>
                    </li>
                    <li>
                        <Link className='navLink' to={'/signin'}>Sign in</Link>
                    </li>
                    <li>
                        <Link className='navLink' to={'/signup'}>Sign Up</Link>
                    </li>
                    <li>
                        <Link className='navLink' id='cartLogo' to={'/cart'}><GiBowlOfRice style={{fontSize:'30px',color:'white'}}/></Link>
                    </li>
                    
                        <button className='nav-btn ' onClick={showNavMenu} ><FaTimes /></button>
                     
              
                </ul>

            </div>

        </nav >
       
        



    )
}

export default NavBar;
