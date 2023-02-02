import { Route, Routes } from "react-router-dom";
import Settings from "./components/Settings";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Page404 from "./pages/Page404";
import Register from "./pages/register/Register";
import Single from "./pages/single/Single";
import Write from "./pages/Write";

function App() {
  const user = false;
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={user ? <Home /> : <Register />} />
      <Route path="/login" element={user ? <Home /> : <Login />} />
      <Route path="/write" element={user ? <Write /> : <Register />} />
      <Route path="/settings" element={user ? <Settings /> : <Register />} />
      <Route path="/post/:postId" element={user ? <Single /> : <Register />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
