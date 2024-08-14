import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.tableContainer}>
      <thead>
        <tr>
          <th className={css.thCell}>Type</th>
          <th className={css.thCell}>Amount</th>
          <th className={css.thCell}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td className={css.tdCell}>{type}</td>
              <td className={css.tdCell}>{amount}</td>
              <td className={css.tdCell}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
