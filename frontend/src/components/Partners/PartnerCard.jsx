import React from "react";

function PartnerCard({ name, category, rating, lastOrder }) {
  return (
    <div className="partner-card">
      <h3>{name}</h3>
      <p>
        <b>Kategori:</b> {category}
      </p>
      <p>
        <b>Rating:</b> {rating} ⭐
      </p>
      <p>
        <b>Pesanan Terakhir:</b> {lastOrder}
      </p>
      <button className="partner-button">Hubungi</button>
    </div>
  );
}

export default PartnerCard;
