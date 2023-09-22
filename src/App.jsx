import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/about-us/AboutUs";
import ContactUs from "./pages/contact-us/ContactUs";
import ExhibitorRegisteration from "./pages/exhibitor/ExhibitorRegisteration";
import FAQ from "./pages/faq/FAQ";
import Home from "./pages/home/Home";
import Session from "./pages/session/Session";
import Store from "./pages/store/Store";
import Registeration from "./pages/registeration/Registeration";
import VisitorRegisteration from "./pages/visitor/VisitorRegisteration";
import VisitsRegisteration from "./pages/visits/VisitsRegisteration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/registeration/visits-register" element={<VisitsRegisteration/>} />
        <Route path="/registeration/visitor-register" element={<VisitorRegisteration />} />
        <Route
          path="/registeration/exhibitor-register"
          element={<ExhibitorRegisteration />}
        />
        <Route path="/session" element={<Session />} />
        <Route path="/store" element={<Store />} />
        <Route path="/registeration" element={<Registeration />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
