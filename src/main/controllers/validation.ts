import { TCreateNewSale } from "../@types";

export const createSalesValidateData = (data: TCreateNewSale) => {
  const { sales_exe_name, customer_name, customer_phone, sales_type } = data;
  const phoneRegex = /^\d{10}$/;
  const errors: string[] = [];

  if (!sales_exe_name) {
    errors.push("Sales executive name is required");
  }
  if (!customer_name) {
    errors.push("Customer name is required");
  }
  if (!customer_phone) {
    errors.push("Customer phone is required");
  }
  if (!sales_type) {
    errors.push("Sales type is required");
  }
  if (!phoneRegex.test(customer_phone)) {
    errors.push("Invalid phone number");
  }
  if (!["cash", "credit", "online"].includes(sales_type)) {
    errors.push("Invalid sales type");
  }

  return errors.length ? new Error(errors.join(", ")) : true;
};
