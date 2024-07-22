import { useState } from "react";
import BetPanel from "./Buttons/BetPanel";
import DealLabel from "./Buttons/DealLabel";

function ButtonPanel( props: any ) {
  const style: { [className: string]: string } = props.style;
  const [isDisabled, setIsDisable] = useState(false);
  
  
  function nextStage(): void {
    // ensures that bet will set to 1 after moving from stage 0
    if (props.bet === 0 && props.handStage === 0) {
      props.setBet(1);
    }

    /* 
      After hitting Deal/Play button at Stage 2, play advances to Stage 3 (next hand). Since handStage updates after Deal/Play button is clicked, it appears that winLose is fired after Stage 1, not Stage 2. 
      • So, "handStage + 1 === 2" is just for clairty.
    */ 
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
      {/* props.bet enables BetButtons */}
      <BetPanel changeBet={props.changeBet} style={style} bet={props.bet} handStage={props.handStage} card={props.card} /> 
      <button className={style.Play_Deal} onClick={nextStage} disabled={isDisabled}>
        <DealLabel handStage={props.handStage} card={props.card} />
      </button>
      <div className={style.Bankroll}>
        ${props.bankroll}
      </div>
    </section>
  );
}

export default ButtonPanel;