import BetPanel from "./Buttons/BetPanel";

function ButtonPanel( props: any ) {
  const style: { [className: string]: string } = props.style;
  let dealButton = props.deal ? "Deal" : "Play"; // game begins on Play (false ~ 0)


  function playDeal(): void {
    props.playDeal();
  }

  return (
    <section className={style.Button_Panel}>
      <div className={style.Bet_Display}>
        ${props.bet}
      </div>
      <BetPanel changeBet={props.changeBet} style={style} playDeal={playDeal} bet={props.bet} /> {/* props.bet enables BetButtons */}
      <button className={style.Play_Deal} onClick={playDeal}>
        {dealButton}
      </button>
    </section>
  );
}

export default ButtonPanel;