import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import UseProfile from "./components/UserProfile.jsx";
import NotFound from "./components/NotFound.jsx";
import Navbar from "./components/Navbar";
import Analytics from "./pages/Analytics/Analytics.jsx";
import Development from "./pages/Analytics/Development.jsx";
import CyberSecurity from "./pages/Analytics/CyberSecurity.jsx";
import UIUX from "./pages/Analytics/UIUX.jsx";
function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/profiles/:id" element={<UseProfile />} />
        <Route path="/Analytics" element={<Analytics />}>
          <Route path="/Analytics/development" element={<Development />} />
          <Route path="/Analytics/cyberSecurity" element={<CyberSecurity />} />
          <Route path="/Analytics/uiux" element={<UIUX />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
