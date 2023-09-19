import Table from "../common/Table";
import Accordion from "./Accordion";

function SalesTable({ data, handleAction }: TSalesTableProps) {
  return (
    <section>
      <Table
        columns={columnsFn(handleAction)}
        rows={data}
        Accordion={Accordion}
      />
    </section>
  );
}

export default SalesTable;

const columnsFn = (handleAction: (type: "delete", row: any) => void) => {
  const TableColumns = [
    { label: "id", renderCell: (row) => row.id },
    {
      label: "Sales Name",
      renderCell: (row) => row.sales_exe_name,
    },
    {
      label: "Invoice No.",
      renderCell: (row) => row.invoice_no,
    },
    {
      label: "Customer Name",
      renderCell: (row) => row.customer_name,
    },
    {
      label: "Customer Phone",
      renderCell: (row) => row.customer_phone,
    },
    {
      label: "Sales Type",
      renderCell: (row) => row.sales_type,
    },
    {
      label: "Sales Date",
      renderCell: (row) => row.sale_date.toLocaleDateString(),
    },
    {
      label: "Delete",
      renderCell: (row) => (
        <button onClick={() => handleAction("delete", row)}>Delete</button>
      ),
    },
  ];
  return TableColumns;
};

type TSalesTableProps = {
  data: any[];
  handleAction: (type: "delete", row: any) => void;
};
