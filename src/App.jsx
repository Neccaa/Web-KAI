import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

// ✅ Import all page components normally (tanpa lazy loading)
import Homepage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import SyaratKetenPage from "./pages/SyaratKetenPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import FaqPage from "./pages/FaqPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import MusicVisualizer from "./pages/MusicVisualizer";

function App() {
  const location = useLocation();

  const isLoginPage =
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/visualizer" ||

    location.pathname === "/forgot-password";

  return (
    <>
      {!isLoginPage && <NavbarComponent />}

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/kelas" element={<KelasPage />} />
        <Route path="/testimonial" element={<TestimonialsPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/syaratketen" element={<SyaratKetenPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/visualizer" element={<MusicVisualizer />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Routes>

      {!isLoginPage && <FooterComponent />}
    </>
  );
}

export default App;