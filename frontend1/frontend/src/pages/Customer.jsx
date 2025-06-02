import React, { useState, useEffect } from "react";
import CustomerForm from "../components/CustomerForm";
import CustomerList from "../components/CustomerList";
import "../style/Customer.css";
import useFetch from "../services/Hooks/customFetch";

function Customer({ customers, setCustomers }) {
  const [editingCustomer, setEditingCustomer] = useState(null);

  const pelangganfetch = useFetch("http://127.0.0.1:6543/pelanggan");

  useEffect(() => {
    if (pelangganfetch.response?.data) {
      setCustomers(pelangganfetch.response?.data);
    }
  }, [pelangganfetch.response?.data]);

  const handleSubmit = (customerData) => {
    if (editingCustomer) {
      setCustomers(
        customers.map((c) =>
          c.id === editingCustomer.id
            ? { ...customerData, id: editingCustomer.id }
            : c
        )
      );
    } else {
      setCustomers([...customers, { ...customerData, id: Date.now() }]);
    }
    setEditingCustomer(null);
  };

  const handleDelete = (id) => {
    setCustomers(customers.filter((c) => c.id !== id));
  };

  return (
    <div className="customer-page">
      <h1>Manajemen Pelanggan</h1>
      <CustomerForm
        key={editingCustomer?.id || "new"}
        initialData={
          editingCustomer || {
            name: "",
            phone: "",
            email: "",
            points: 0,
            address: "",
          }
        }
        onSubmit={handleSubmit}
        onCancel={() => setEditingCustomer(null)}
      />
      <CustomerList
        customers={customers}
        onEdit={setEditingCustomer}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default Customer;
