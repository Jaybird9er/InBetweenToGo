import BetButton from "./BetButton";

function BetPanel(props: any) {
  const style: { [className: string]: string } = props.style;
  let increaseBet = () => props.changeBet(true);
  let decreaseBet = () => props.changeBet(false);

  return (
    <div className={style.Bet_Panel}>
      <BetButton changeBet={increaseBet} className={style.Increase_Bet} sign={"+"}/>
      <BetButton changeBet={decreaseBet} className={style.Decrease_Bet} sign={"-"}/>
    </div>
  );
}

export default BetPanel;