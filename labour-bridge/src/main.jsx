import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import MilestonesPage from "./pages/MilestonesPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/milestones" element={<MilestonesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  </StrictMode>
);
