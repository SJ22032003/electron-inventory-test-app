import styles from "./styles.module.scss";

function Accordion({ data }: any) {
  return (
    <div className={styles.row}>
      <div className={styles.cell}>{data.id}</div>
      <div className={styles.cell}>{data.sales_exe_name}</div>
      <div className={styles.cell}>{data.invoice_no}</div>
      <div className={styles.cell}>{data.customer_name}</div>
      <div className={styles.cell}>{data.customer_phone}</div>
      <div className={styles.cell}>{data.sales_type}</div>
      <div className={styles.cell}>
        {new Date(data.sale_date).toLocaleDateString()}
      </div>
    </div>
  );
}

export default Accordion;
