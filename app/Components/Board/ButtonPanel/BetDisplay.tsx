import styles from "../../../page.module.css";

function BetDisplay( props: {bet: number} ) {
    return (
      <div className={styles.Bet_Display}>
        ${props.bet}
      </div>
    );
  }

  export default BetDisplay;