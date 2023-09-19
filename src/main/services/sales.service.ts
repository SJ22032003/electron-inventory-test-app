import db from "../database/models/models.config";
import {
  TGetAllSalesPaginationService,
  TCreateNewSale,
  TDeleteSaleQuery,
} from "../@types";

export const getAllSalesPaginationService = async (
  query: TGetAllSalesPaginationService,
) => {
  try {
    const { count, rows } = await db.sales.findAndCountAll(query);
    return { count, rows };
  } catch (error) {
    return error;
  }
};

export const createNewSaleService = async (sale: TCreateNewSale) => {
  try {
    const resp = await db.sales.create(sale);
    return resp;
  } catch (error) {
    return error;
  }
};

export const deleteSaleService = async (query: TDeleteSaleQuery) => {
  try {
    const resp = await db.sales.destroy(query);
    return resp;
  } catch (error) {
    return error;
  }
};
