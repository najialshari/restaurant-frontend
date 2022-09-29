import React  ,{useRef} from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';
import { FaTimes, FaBars } from 'react-icons/fa';
import { GiBowlOfRice} from 'react-icons/gi';
import logo from  '../../Images/logo6.png'
import SignOut from '../SignOut/signOut';
import { useSelector} from "react-redux";
// import { useState, useEffect } from 'react';



// import { useSelector, useDispatch } from "react-redux";

function NavBar() {
    //   const dispatch = useDispatch();
    const navRef = useRef ();
    const btnRef = useRef ();
    const showNavMenu = () => {
        navRef.current.classList.toggle("responsive_nav")
        btnRef.current.classList.toggle("responsive_btn")
    }
    const isTableTokenAvailable = useSelector(state => state.qrcodes.isAuthenticated);
    console.log(" in NavBaris Token ,",isTableTokenAvailable)

    
    // const tableData = useSelector(state => state.qrcodes);
    // const isTableTokenAvailable = tableData.isAuthenticated;
    // const tableNo = tableData.data.table.no;
    // console.log(" in NavBaris Table . ,",tableData)
    // console.log(" in NavBaris isTableTokenAvailable . ,",isTableTokenAvailable)
    // console.log(" in NavBaris Table No . ,",tableNo)
    
    const isSignedIn = useSelector(state => state.auth.isAuthenticated);
console.log("in NavBar is User Signed In ",isSignedIn)


// const userName = useSelector(state => state.auth.data.user);
// console.log(" in NavBaris userName  ,",userName)


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
                    {isSignedIn?
                    <li>
                        <Link className='navLink' to={'/profile'}>Profile</Link>
                    </li>:null}
                    <li>
                        <Link className='navLink' to={'/category'}>Categories</Link>
                    </li>
                    {isSignedIn || isTableTokenAvailable?
                    null:
                    <>
                    <li>
                        <Link className='navLink' to={'/signin'}>Sign in</Link>
                    </li>
                    <li>
                        <Link className='navLink' to={'/signup'}>Sign Up</Link>
                    </li>
                    </>}
                    <li>
                        <Link className='navLink' id='cartLogo' to={'/cart'}><GiBowlOfRice style={{marginTop:'-5px',marginBottom:'-5px',fontSize:'30px'}}/></Link>
                    </li >
                    {(isTableTokenAvailable || isSignedIn )?
                    <li className='navLink'>
                        <SignOut />
                    </li>:null}
                    {/* {(isTableTokenAvailable  )?
                    <li className='navLink'>
                        <h3>TABLE{tableNo}</h3>
                    </li>:null} */}
                    {/* {( isSignedIn )?
                    <li className='navLink'>
                        <h3>Welcome{userName}</h3>
                    </li>:null} */}
                    
                        <button className='nav-btn ' onClick={showNavMenu} ><FaTimes style={{background:" rgb(220, 178, 40)"}} /></button>
                     
              
                </ul>

            </div>

        </nav >
       
        



    )
}

export default NavBar;
