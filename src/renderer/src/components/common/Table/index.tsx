import "./styles.scss";
import { useState } from "react";

function NewTable({ columns, rows, Accordion }: any) {
  if (!Array.isArray(rows)) {
    return;
  }

  const [openRows, setOpenRows] = useState<number[]>([]);
  const toggleRow = (index: number) => {
    setOpenRows((prevOpenRows) =>
      prevOpenRows.includes(index)
        ? prevOpenRows.filter((i) => i !== index)
        : [...prevOpenRows, index],
    );
  };

  return (
    <>
      <table className="fold-table">
        <thead>
          <tr>
            {columns.map((column: TColumn) => (
              <th key={column.label}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row: any, index: number) => (
            <>
              <tr key={index} className="view" onClick={() => toggleRow(index)}>
                {columns.map((column: TColumn) => (
                  <td key={column.label}>{column.renderCell(row)}</td>
                ))}
              </tr>
              {Accordion && (
                <AccordionSection
                  index={index}
                  Accordion={Accordion}
                  row={row}
                  toggleRow={toggleRow}
                  openRows={openRows}
                />
              )}
            </>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default NewTable;

const AccordionSection = ({
  Accordion,
  row,
  openRows,
  toggleRow,
  index,
}: any) => {
  return (
    <tr
      className={`fold ${openRows.includes(index) ? "open" : ""}`}
      onClick={() => toggleRow(index)}
    >
      <td colSpan={7}>
        <div className="fold-content">
          <Accordion data={row} />
        </div>
      </td>
    </tr>
  );
};

type TColumn = {
  label: string;
  renderCell: (row: any) => any;
};
