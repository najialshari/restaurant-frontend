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
// import RequireAuth from './RequiredAuth';
import Notification from "./Components/Notifications/Notifications";
import   Profile from './Components/EditProfile';
import TableScan from './Components/TableScan/tableScan';
import CategoryMeal from './Components/CategoryMeal/categoryMeal';
import HomePage from './Components/HomePage/HomePage';
import Cart from './Components/Cart/cart';


function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/home' exact element={<HomePage />} />
        <Route path='/menu' exact element={<Menu />} />
        <Route path='/cart' exact element={<Cart />} />
        <Route path={"/signup"} element={<SignUp />} />
        <Route path={"/signin"} element={<SignIn />} />
        <Route path={"/table/:id"} element={<TableScan />} />
        <Route path={"/forgetPassword"} element={<ForgetPassword />} />
        <Route path={"/meals/:id"} element={<CategoryMeal />} />
        <Route path='*'  element={<Home />} />
        <Route path='/notfound'  element={<PageNotFound />} />
        {/* <Route element={<RequireAuth />}> */}
        <Route path={"/profile"} element={<Profile />} />
        {/* </Route> */}

      </Routes>

      <Footer />
      <Notification />

    </div>
  );
}

export default App;
