import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/navBar';
import Home from './Components/Home/home';
import Footer from './Components/Footer/footer';
import SignUp from './Components/SignUp/signUp';
import SignIn from './Components/SignIn/signIn';
import Menu from './Components/menu/menu';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import ForgetPassword from './Components/forgetPassword/forgetPassword';
import RequireAuth from './RequiredAuth';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>

        <Route path='/' exact element={<Home />} />
        <Route path='/menu' exact element={<Menu />} />
        <Route path={"/signup"} element={<SignUp />} />
        <Route path={"/signin"} element={<SignIn />} />
        <Route path={"/forgetPassword"} element={<ForgetPassword />} />
        <Route path='*'  element={<Home />} />
        {/* <Route path='*'  element={<PageNotFound />} /> */}
        <Route element={<RequireAuth />}>

        </Route>

      </Routes>

      <Footer />

    </div>
  );
}

export default App;
