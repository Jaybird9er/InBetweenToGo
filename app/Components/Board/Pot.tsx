import styles from "../../page.module.css";

// required to include "export" to avoid "JSX literal" problem
export default function Pot( props: {pot: number} ) {

  return (
    <div className={styles.Pot}>
      ${props.pot}
    </div>
  )
}