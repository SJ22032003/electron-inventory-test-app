import { ipcMain } from "electron";
import {
  getAllSales,
  deleteSale,
  createNewSale,
} from "../controllers/sales.controller";
import * as actions from "../../renderer/src/api/actions";

ipcMain.handle(actions.GET_ALL_SALES_PAGINATION, getAllSales);
ipcMain.handle(actions.DELETE_SALE, (e, id) => deleteSale(id));
ipcMain.handle(actions.CREATE_SALE, (e, sale) =>
  createNewSale(JSON.parse(sale)),
);
