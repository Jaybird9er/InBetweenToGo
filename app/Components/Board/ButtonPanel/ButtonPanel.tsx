import BetPanel from "./Buttons/BetPanel";

function ButtonPanel( props: any ) {
  const style: { [className: string]: string } = props.style;
  let dealLabel: string = props.handStage % 2 === 0 || props.handStage === 3 ? "Deal" : "Play"; // game begins on Deal (false ~ 0)
  let bet = props.handStage === 0 ? 0 : props.bet;

  return (
    <section className={style.Button_Panel}>
      <div className={style.Bet_Display}>
        ${props.handStage === 0 ? 0 : props.bet}
      </div>
      <BetPanel changeBet={props.changeBet} style={style} bet={props.bet} handStage={props.handStage} /> {/* props.bet enables BetButtons */}
      <button className={style.Play_Deal} onClick={props.changeStage}>
        {dealLabel}
      </button>
    </section>
  );
}

export default ButtonPanel;