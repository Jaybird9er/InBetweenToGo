import { useState } from "react";
import BetPanel from "./Buttons/BetPanel";
import DealLabel from "./Buttons/DealLabel";
import BetManager from "./Buttons/BetManager";

function ButtonPanel( props: any ) {
  const style: { [className: string]: string } = props.style;
  const [isDisabled, setIsDisable] = useState(false);
  let handStage = props.handStage;
  let setHandStage = props.setHandStage;
  let max = props.max;
  let min = props.min;
  let middleCard = props.middleCard;
  let deck = props.deck;
  let newDeck = props.newDeck;
  let setDeck = props.setDeck;
  
  function nextStage(): void {
    // ensures that bet will set to 1 after moving from stage 0
    if (props.bet === 0 && handStage === 0) {
      props.setBet(1);
    }

    /* 
      After hitting Deal/Play button at Stage 2, play advances to Stage 3 (next hand). Since handStage updates after Deal/Play button is clicked, it appears that winLose is fired after Stage 1, not Stage 2. 
      • So, "handStage + 1 === 2" is just for clairty.
    */ 
    if (handStage + 1 === 2) { 
      props.winLose();
      // stage: number, bet: number, pot: number, setPot: (pot: number) => void, winLose: () => string
      // props.changePot(props.handStage, props.bet, props.pot, props.setPot(props.pot), props.winLose());
      setIsDisable(!isDisabled);
      setTimeout(() => { setIsDisable(isDisabled => !isDisabled) }, props.enums.delay);
    }

    props.changeStage(handStage, max, min, middleCard, deck, setHandStage, newDeck, setDeck); // advances to next stage after performing other evaluations
  }

  return (
    <section className={style.Button_Panel}>
      <div className={style.Bet_Display}>
        ${props.bet}
      </div>
      {/* props.bet enables BetButtons */}
      {/* <BetPanel changeBet={props.changeBet} style={style} bet={props.bet} handStage={props.handStage} card={props.card} hiLo={props.hiLo} min={props.min} max={props.max} />  */}
      <BetManager 
        handStage={props.handStage} 
        hiLo={props.hiLo} 
        min={props.min} 
        max={props.max} 
        increaseBet={props.changeBet} 
        decreaseBet={props.changeBet} 
        style={style} 
      /> 
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