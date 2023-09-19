export type TCreateNewSale = {
  sales_exe_name: string;
  customer_name: string;
  customer_phone: string;
  sales_type: string;
};

export type TGetAllSalesPaginationService = {
  offset: number;
  limit: number;
  order: string[][];
  plain?: boolean;
  raw?: boolean;
};

export type TDeleteSaleQuery = {
  where: {
    id: number;
  };
};
