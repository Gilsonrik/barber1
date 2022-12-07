import React from "react";

import "./Config/ReactotronConfig";

import Router from "./Routes/index";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import SignIn from "./Pages/SignIn/index";
// import SignUp from "./Pages/SignUp/index";

// import Dashboard from "./Pages/Dashbord";
// import Profile from "./Pages/Profile/index";

function App() {
  return (
    <Router />
    // <Router>
    //   <Routes>
    //     <Route path="/" exact element={<SignIn />} />
    //     <Route path="/register" element={<SignUp />} />

    //     <Route path="/Dashboard" element={<Dashboard />} />
    //     <Route path="/Profile" element={<Profile />} />
    //   </Routes>
    // </Router>
  );
}

export default App;
