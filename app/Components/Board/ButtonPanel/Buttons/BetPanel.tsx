import BetButton from "./BetButton";

function BetPanel(props: any) {
  const style: { [className: string]: string } = props.style;
  const handStage = props.handStage;
  let increaseBet = () => props.changeBet(true);
  let decreaseBet = () => props.changeBet(false);
  let isDisabled = handStage !== 1 ? true : false; // after play is hit, bet goes to $1 and (In/De)crease buttons are enabled
  

  return (
      <div className={style.Bet_Panel}>
        <BetButton id={"IncreaseBet"} changeBet={increaseBet} className={style.Increase_Bet} sign={"+"} disabled={isDisabled} />
        <BetButton id={"DecreaseBet"} changeBet={decreaseBet} className={style.Decrease_Bet} sign={"-"} disabled={isDisabled} />
      </div>
  );
}

export default BetPanel;