import React, { useState } from "react";
import styles from "./styles.module.scss";

function SalesForm({ handleFormSubmit }: any) {
  // Define state variables for form fields
  const [salesData, setSalesData] = useState({
    sales_exe_name: "",
    customer_name: "",
    customer_phone: "",
    sales_type: "",
    sale_date: "",
  });

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSalesData({ ...salesData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleFormSubmit(salesData);
  };

  return (
    <div className={styles["form-container"]}>
      <h2>Create a New Sale</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="sales_exe_name">Sales Executive Name:</label>
          <input
            type="text"
            id="sales_exe_name"
            name="sales_exe_name"
            value={salesData.sales_exe_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="customer_name">Customer Name:</label>
          <input
            type="text"
            id="customer_name"
            name="customer_name"
            value={salesData.customer_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="customer_phone">Customer Phone:</label>
          <input
            type="text"
            id="customer_phone"
            name="customer_phone"
            value={salesData.customer_phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="sales_type">Sales Type:</label>
          <select
            id="sales_type"
            name="sales_type"
            value={salesData.sales_type}
            onChange={handleChange}
            required
          >
            <option value="cash">Cash</option>
            <option value="credit">Credit</option>
            <option value="online">Online</option>
          </select>
        </div>
        <div>
          <label htmlFor="sale_date">Sale Date:</label>
          <input
            type="date"
            id="sale_date"
            name="sale_date"
            value={salesData.sale_date}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SalesForm;
