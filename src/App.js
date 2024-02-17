import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  NavBar,
  Footer,
  Cart,
  SignUp,
  SignIn,
  Menu,
  PageNotFound,
  ForgetPassword,
  Notification,
  Profile,
  TableScan,
  HomePage,
  MealDetails,
} from "./Components";

function App() {
  window.onbeforeunload = () => localStorage.clear();
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/menu" exact element={<Menu />} />
        {/* <Route path="/cart" exact element={<Cart />} /> */}
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
