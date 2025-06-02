import React, { useState, useEffect } from "react";
import "../style/Menu.css";

import usePost from "../services/Hooks/customPost";
import usePut from "../services/Hooks/customPut";
import useDelete from "../services/Hooks/customDelete";

function MenuForm({  editingMenu, setEditingMenu }) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "minuman",
    description: "",
    available: true,
  });

  // Post 
  const postMenu = usePost("http://127.0.0.1:6543/menu");

  // Put
  const putMenu = usePut(`http://127.0.0.1:6543/menu/${editingMenu?.id}`);


  useEffect(() => {
    if (editingMenu) {
      setFormData({
        name: editingMenu.name,
        price: editingMenu.price.toString(),
        category: editingMenu.category,
        description: editingMenu.description || "",
        available: editingMenu.available,
      });
    } else {
      setFormData({
        name: "",
        price: "",
        category: "minuman",
        description: "",
        available: true,
      });
    }
  }, [editingMenu]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi sederhana
    if (!formData.name.trim()) {
      alert("Nama menu harus diisi");
      return;
    }

    if (!formData.price || isNaN(formData.price)) {
      alert("Harga harus berupa angka");
      return;
    }

    if(editingMenu){
      putMenu.putData(formData)
    }else{
      postMenu.postData(formData);
    }
    
  };

  // Response post
  useEffect(()=>{
    console.log(postMenu.response);
    if(postMenu.response?.status == 200){
      console.log("Post success");
      window.location.reload();
    }

  },[postMenu.response])


  // Response put
  useEffect(()=>{
    console.log(putMenu.response);
    if(putMenu.response?.status == 200){
      console.log("Put success");
      window.location.reload();
    }

  },[putMenu.response])
  return (
    <form onSubmit={handleSubmit} className="menu-form">
      <h2>{editingMenu ? "Edit Menu" : "Tambah Menu Baru"}</h2>

      <div className="form-group">
        <label>Nama Menu*:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Harga* (Rp):</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
          min="0"
        />
      </div>

      <div className="form-group">
        <label>Kategori:</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="minuman">Minuman</option>
          <option value="makanan">Makanan</option>
          <option value="snack">Snack</option>
        </select>
      </div>

      <div className="form-group">
        <label>Deskripsi:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <div className="form-group checkbox">
        <label>
          <input
            type="checkbox"
            name="available"
            checked={formData.available}
            onChange={handleChange}
          />
          Tersedia
        </label>
      </div>

      <div className="form-actions">
        <button type="submit" className="submit-btn">
          {editingMenu ? "Update Menu" : "Tambah Menu"}
        </button>
        {editingMenu && (
          <button
            type="button"
            className="cancel-btn"
            onClick={() => setEditingMenu(null)}
          >
            Batal
          </button>
        )}
      </div>
    </form>
  );
}

export default MenuForm;
