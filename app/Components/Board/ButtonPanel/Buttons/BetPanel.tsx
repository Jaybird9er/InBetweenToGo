import BetButton from "./BetButton";

function BetPanel(props: any) {
  const style: { [className: string]: string } = props.style;
  const handStage = props.handStage;
  let increaseBet = () => props.changeBet(true);
  let decreaseBet = () => props.changeBet(false);
  let deck = props.card;
  let hiLo = [deck[deck.length - 1].value, deck[deck.length - 2].value];
  let max = Math.max(...hiLo);
  let min = Math.min(...hiLo);
  
  // after play is hit, bet goes to $1 and (In/De)crease buttons are enabled, unless a 2-card instance is dealt
  let isDisabled = handStage !== 1 || min + 1 === max || min === max ? true : false; 
  
  return (
      <div className={style.Bet_Panel}>
        <BetButton id={"IncreaseBet"} changeBet={increaseBet} className={style.Increase_Bet} sign={"+"} disabled={isDisabled} />
        <BetButton id={"DecreaseBet"} changeBet={decreaseBet} className={style.Decrease_Bet} sign={"-"} disabled={isDisabled} />
      </div>
  );
}

export default BetPanel;