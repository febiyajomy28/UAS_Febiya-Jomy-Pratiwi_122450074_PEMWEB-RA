import React, { useState, useEffect } from "react";

import usePost from "../services/Hooks/customPost";
import usePut from "../services/Hooks/customPut";


function CustomerForm({ initialData, onSubmit, onCancel }) {
  const [formData, setFormData] = useState(initialData);

  // Post
  const postCustomer = usePost("http://127.0.0.1:6543/pelanggan");

  // Put
  const putCustomer = usePut(`http://127.0.0.1:6543/pelanggan/${initialData.id}`);

  // Reset form saat initialData berubah
  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi sederhana
    if (!formData.name || !formData.phone) {
      alert("Nama dan telepon harus diisi");
      return;
    }

    if (initialData.id) {
      putCustomer.putData(formData);
    } else {
      postCustomer.postData(formData);
    }
  };

  // Response post
  useEffect(() => {
    console.log(postCustomer.response); 
    if (postCustomer.response?.status === 201 || postCustomer.response?.status === 200) {
      window.location.reload();
    }
  }, [postCustomer.response]);

  // Response put
  useEffect(() => {
    console.log(putCustomer.response); 
    if (putCustomer.response?.status === 201 || putCustomer.response?.status === 200) {
      window.location.reload();
    }
  }, [putCustomer.response]);

  return (
    <form onSubmit={handleSubmit} className="customer-form">
      <h2>{initialData.id ? "Edit Pelanggan" : "Tambah Pelanggan Baru"}</h2>

      <div className="form-group">
        <label>Nama*:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Telepon*:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Poin:</label>
        <input
          type="number"
          name="points"
          value={formData.points}
          onChange={handleChange}
          min="0"
        />
      </div>

      <div className="form-group">
        <label>Alamat:</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>

      <div className="form-actions">
        <button type="submit" className="submit-btn">
          {initialData.id ? "Update" : "Simpan"}
        </button>
        {initialData.id && (
          <button type="button" className="cancel-btn" onClick={onCancel}>
            Batal
          </button>
        )}
      </div>
    </form>
  );
}

export default CustomerForm;
