import { useState } from "react";
import BetPanel from "./Buttons/BetPanel";

function ButtonPanel( props: any ) {
  const style: { [className: string]: string } = props.style;
  const [isDisabled, setIsDisable] = useState(false);
  let deck = props.card;
  let hiLo = [deck[deck.length - 1].value, deck[deck.length - 2].value];
  let max = Math.max(...hiLo);
  let min = Math.min(...hiLo);
  let dealLabel: string = props.handStage % 2 === 0 || props.handStage === 3 ? "Deal" : "Play"; // game (and first hand) begins on Deal (false ~ 0) - hand resets on 3

  function nextStage(): void {
    // ensures that bet will set to 1 after moving from stage 0
    if (props.bet === 0 && props.handStage === 0) {
      props.setBet(1);
    }

    if (min + 1 === max) {
      dealLabel = "Bust";
    } else if (min === max) {
      dealLabel = "Double W!";
    }
    
    // After hitting Deal/Play button at Stage 2, play advances to Stage 3 (next hand). Since handStage updates after Deal/Play button is clicked, it appears that winLoss is fired after Stage 1, not Stage 2. 
      // So, "handStage + 1 === 2" is just for clairty.
    if (props.handStage + 1 === 2) { 
      props.winLose();
      setIsDisable(!isDisabled);
      setTimeout(() => { setIsDisable(isDisabled => !isDisabled) }, props.enums.delay);
    }

    props.changeStage(); // advances to next stage after performing other evaluations
  }

  return (
    <section className={style.Button_Panel}>
      <div className={style.Bet_Display}>
        ${props.bet}
      </div>
      <BetPanel changeBet={props.changeBet} style={style} bet={props.bet} handStage={props.handStage} card={props.card} /> {/* props.bet enables BetButtons */}
      <button className={style.Play_Deal} onClick={nextStage} disabled={isDisabled}>
        {dealLabel}
      </button>
      <div className={style.Bankroll}>
        ${props.bankroll}
      </div>
    </section>
  );
}

export default ButtonPanel;