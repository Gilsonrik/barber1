import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignIn from "../Pages/SignIn/index";
import SignUp from "../Pages/SignUp/index";

import Dashbord from "../Pages/Dashbord";
import Profile from "../Pages/Profile/index";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />

        <Route path="/Dashbord" element={<Dashbord />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
