import React,{useEffect} from "react";

import useDelete from "../services/Hooks/customDelete";


function CustomerList({ customers, onEdit, onDelete }) {
  const { response,deleteData } = useDelete();

  // response
  useEffect(() => {
    console.log(response);
    if (response) {
      window.location.reload();
    }
  }, [response]);

  return (
    <div className="customer-list">
      <h2>Daftar Pelanggan</h2>
      {customers.length === 0 ? (
        <p>Tidak ada pelanggan terdaftar</p>
      ) : (
        <ul>
          {customers.map((customer) => (
            <li key={customer.id} className="customer-item">
              <div className="item-info">
                <h3>{customer.name}</h3>
                <p>Telepon: {customer.phone}</p>
                <p>Email: {customer.email}</p>
                <p>Poin: {customer.points || 0}</p>{" "}
                {/* Pastikan poin ditampilkan */}
                {customer.address && <p>Alamat: {customer.address}</p>}
              </div>
              <div className="item-actions">
                <button onClick={() => onEdit(customer)} className="edit-btn">
                  Edit
                </button>
                <button
                  onClick={() => deleteData(`http://127.0.0.1:6543/pelanggan/${customer.id}`)}
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

export default CustomerList;