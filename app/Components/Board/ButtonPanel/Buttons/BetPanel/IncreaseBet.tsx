import { channel } from "diagnostics_channel";
import styles from "../../../../../page.module.css";

function IncreaseBet(props: any) {
  const className: string = props.className.Increase_Bet;
  let sign = props.sign;

  function change() {
    props.changeBet(true);
  }

  return (
    <button className={className} onClick={change} >
      {sign}
    </button>
  );
}

export default IncreaseBet;