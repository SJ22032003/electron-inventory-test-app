"use strict";
import * as request from "../actions";

export const fetchSalesPaginationData = async () => {
  return await window.ipcChannel.invoke(request.GET_ALL_SALES_PAGINATION);
};

export const deleteSale = async (id: number) => {
  return await window.ipcChannel.invoke(request.DELETE_SALE, id);
};

export const createSale = async (sale: any) => {
  return await window.ipcChannel.invoke(
    request.CREATE_SALE,
    JSON.stringify(sale),
  );
};
