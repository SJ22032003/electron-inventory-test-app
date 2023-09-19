import {
  getAllSalesPaginationService,
  createNewSaleService,
  deleteSaleService,
} from "../services/sales.service";
import { createSalesValidateData } from "./validation";
import { TCreateNewSale } from "../@types";

export const getAllSales = async () => {
  const queryMap = {
    offset: 0,
    limit: 10,
    order: [["createdAt", "DESC"]],
    raw: true,
  };
  const sales = await getAllSalesPaginationService(queryMap);
  if (sales instanceof Error) {
    throw new Error(sales.message);
  }
  return sales;
};

export const createNewSale = async (data: TCreateNewSale) => {
  const validation = createSalesValidateData(data);
  if (validation instanceof Error) {
    throw new Error(validation.message);
  }
  const sale = await createNewSaleService(data);
  if (sale instanceof Error) {
    throw new Error(sale.message);
  }
  return sale;
};

export const deleteSale = async (id: number) => {
  if (!id) {
    throw new Error("No ID found");
  }
  const queryMap = {
    where: {
      id,
    },
  };
  const sale = await deleteSaleService(queryMap);
  if (sale instanceof Error) {
    throw new Error(sale.message);
  }
  return sale;
};
