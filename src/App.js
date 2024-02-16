import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/navBar";
import Footer from "./Components/Footer/footer";
import SignUp from "./Components/SignUp/signUp";
import SignIn from "./Components/SignIn/signIn";
import Menu from "./Components/menu/menu";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword";
import Notification from "./Components/Notifications/Notifications";
import Profile from "./Components/Profile";
import TableScan from "./Components/TableScan/tableScan";
import HomePage from "./Components/HomePage/HomePage";
import Cart from "./Components/Cart/Cart";
import MealDetails from "./Components/MealCard/MealDetails";

function App() {
  window.onbeforeunload = () => localStorage.clear();
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/menu" exact element={<Menu />} />
        <Route path="/cart" exact element={<Cart />} />
        <Route path={"/signup"} element={<SignUp />} />
        <Route path={"/signin"} element={<SignIn />} />
        <Route path={"/table/:id"} element={<TableScan />} />
        <Route path={"/forgetPassword"} element={<ForgetPassword />} />
        <Route path={"/meals/:id"} element={<MealDetails />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/notfound" element={<PageNotFound />} />
        <Route path={"/profile"} element={<Profile />} />
      </Routes>
      <Notification />
      <Footer />
    </div>
  );
}

export default App;
