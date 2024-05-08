import styles from "../../../page.module.css";
import { Cards } from "@/app/interface";

function Card(props: Cards) {
  let value = props.value;
  let symbol = props.symbol;
  let label = props.label;
  let color = props.color;

  return (
    <div className={styles.Card}>
      <span style={{ color: color }}>{label}</span>
      &nbsp;:&nbsp;
      <span style={{ color: color }}>{symbol}</span>
    </div>
  );
}


  export default Card;