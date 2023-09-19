import styles from "./styles.module.scss";

const Table = ({ columns, rows, Accordion }: any) => {
  if (!Array.isArray(rows)) {
    return;
  }

  return (
    <table className={styles.table}>
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
            <tr key={index}>
              {columns.map((column: TColumn) => (
                <td key={column.label}>{column.renderCell(row)}</td>
              ))}
            </tr>
            {Accordion && <AccordionSection Accordion={Accordion} row={row} />}
          </>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

const AccordionSection = ({ Accordion, row }: any) => {
  const toggleAccordion = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    button.classList.toggle("active");
    const panel = button.nextElementSibling as HTMLDivElement;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  };
  return (
    <section>
      <button className={styles.accordion} onClick={toggleAccordion}>
        Acc
      </button>
      <div className={styles.panel}>
        <Accordion row={row} />
      </div>
    </section>
  );
};

type TColumn = {
  label: string;
  renderCell: (row: any) => any;
};
