import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import InventoryPage from "./pages/InventoryPage";
import PartnersPage from "./pages/PartnersPage";
import AvailabilityDashboard from "./pages/AvailabilityDashboard";
import PurchasePage from "./pages/PurchaseForm";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inventory" element={<InventoryPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/availability" element={<AvailabilityDashboard />} />
            <Route path="/purchase" element={<PurchasePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
