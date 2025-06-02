import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PartnerCard from "../components/Partners/PartnerCard";
import OrderChart from "../components/Partners/OrderChart";
import TransactionTable from "../components/Partners/TransactionTable";
import "../style/Partners.css";
import AvailabilityDashboard from "./AvailabilityDashboard";

function PartnersPage() {
  return (
    <div>
      <Navbar />
      <div className="wrapper">
        <h1 className="partners-title">Dashboard Partner</h1>

        <div className="partners-grid">
          {/* Kartu Supplier */}
          <div className="partners-card-section">
            <h2>Supplier Teratas</h2>
            <div className="partner-cards">
              <PartnerCard
                name="Supplier A"
                category="Minuman"
                rating={4.7}
                lastOrder="2 hari lalu"
              />
              <PartnerCard
                name="Supplier B"
                category="Makanan"
                rating={4.2}
                lastOrder="1 minggu lalu"
              />
            </div>
          </div>

          {/* Grafik Pemesanan */}
          <div className="partners-chart-section">
            <h2>Trend Pemesanan</h2>
            <OrderChart />
          </div>
        </div>

        {/* Tabel Transaksi */}
        <div className="partners-table-section">
          <h2>Riwayat Transaksi</h2>
          <TransactionTable />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PartnersPage;
