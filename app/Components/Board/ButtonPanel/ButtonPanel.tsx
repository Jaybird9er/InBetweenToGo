import { useState } from "react";
import BetPanel from "./Buttons/BetPanel";

function ButtonPanel( props: any ) {
  const style: { [className: string]: string } = props.style;
  const [isDisabled, setIsDisable] = useState(false);
  let dealLabel: string = props.handStage % 2 === 0 || props.handStage === 3 ? "Deal" : "Play"; // game (and first hand) begins on Deal (false ~ 0) - hand resets on 3

  function nextStage(): void {
    props.changeStage(); // advances to next stage
    
    // After hitting Deal/Play button at Stage 2, play advances to Stage 3 (next hand). Since handStage updates after Deal/Play button is clicked, it appears that winLoss is fired after Stage 1, not Stage 2. 
      // So, "handStage + 1 === 2" is just for clairty.
    if (props.handStage + 1 === 2) { 
      props.winLose();
      setIsDisable(!isDisabled);
      setTimeout(() => { setIsDisable(isDisabled => !isDisabled) }, props.enums.delay);
    }
  }

  return (
    <section className={style.Button_Panel}>
      <div className={style.Bet_Display}>
        ${props.handStage === 0 || props.handStage === 3 ? 0 : props.bet}
      </div>
      <BetPanel changeBet={props.changeBet} style={style} bet={props.bet} handStage={props.handStage} /> {/* props.bet enables BetButtons */}
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