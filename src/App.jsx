import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Settings from "./components/Settings";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/Write";

function App() {
  return (
    <>
      <Topbar />
      {/* <Home /> */}
      {/* <Single /> */}
      {/* <Write /> */}
      <Settings />
    </>
  );
}

export default App;