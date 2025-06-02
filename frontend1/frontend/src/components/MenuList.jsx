import React, { useEffect, useState } from "react";

import useDelete from "../services/Hooks/customDelete";

function MenuList({ menus, onEdit }) {

  const { response, deleteData } = useDelete();

  // response
  useEffect(() => {
    console.log(response);
    if (response) {
      window.location.reload();
    }
  }, [response]);
  return (
    <div className="menu-list">
      <h2>Daftar Menu</h2>
      {menus.length === 0 ? (
        <p>Tidak ada menu tersedia</p>
      ) : (
        <ul>
          {menus.map((menu) => (
            <li key={menu.id} className="menu-item">
              <div className="item-info">
                <h3>{menu.name}</h3>
                <p>Harga: Rp{menu.price.toLocaleString()}</p>
                <p>Kategori: {menu.category}</p>
                <p>Status: {menu.available ? "Tersedia" : "Habis"}</p>
                {menu.description && <p>Deskripsi: {menu.description}</p>}
              </div>
              <div className="item-actions">
                <button onClick={() => onEdit(menu)} className="edit-btn">
                  Edit
                </button>
                <button
                  onClick={() =>
                    deleteData(`http://127.0.0.1:6543/menu/${menu.id}`)
                  }
                  className="delete-btn"
                >
                  Hapus
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MenuList;
