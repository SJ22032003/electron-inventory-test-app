import { useCallback, useState, useEffect } from "react";
import {
  fetchSalesPaginationData,
  deleteSale,
  createSale,
} from "../../api/request/sales";
import SalesTable from "./SalesTable";
import SalesForm from "./SalesForm";

function Sales() {
  const [sales, setSales] = useState<[] | null>(null);
  const [, setTotalEntries] = useState(0);

  const fetchData = useCallback(async () => {
    const { count, rows } = await fetchSalesPaginationData();
    setSales(rows);
    setTotalEntries(count);
  }, [fetchSalesPaginationData]);

  useEffect(() => {
    fetchData();
  }, []);

  const handleAction = async (type: "delete", row: any) => {
    switch (type) {
      case "delete":
        await deleteSale(row.id)
          .then(() => {
            alert("Sale delete Successfully");
            fetchData();
          })
          .catch(() => {
            alert("Error occurred");
          });
        break;
    }
  };

  const handleFormSubmit = async (data: any) => {
    await createSale(data)
      .then(() => {
        alert("Sale created Successfully");
        fetchData();
      })
      .catch(() => {
        alert("Error occurred");
      });
  };

  if (!sales) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <SalesTable data={sales} handleAction={handleAction} />
      <SalesForm handleFormSubmit={handleFormSubmit} />
    </div>
  );
}

export default Sales;
