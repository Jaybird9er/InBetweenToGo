import BetButton from "./BetButton";

function BetPanel(props: any) {
  const style: { [className: string]: string } = props.style;
  let increaseBet = () => props.changeBet(true);
  let decreaseBet = () => props.changeBet(false);
  let isDisabled = props.bet === 0 ? true : false;

  return (
    <div className={style.Bet_Panel}>
      <BetButton id={"IncreaseBet"} changeBet={increaseBet} className={style.Increase_Bet} sign={"+"} disabled={isDisabled} />
      <BetButton id={"DecreaseBet"} changeBet={decreaseBet} className={style.Decrease_Bet} sign={"-"} disabled={isDisabled} />
    </div>
  );
}

export default BetPanel;