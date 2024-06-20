import BetPanel from "./Buttons/BetPanel";

function ButtonPanel( props: any ) {
  const style: { [className: string]: string } = props.style;

  function playDeal(): void {
    props.playDeal();
  }

  return (
    <section className={style.Button_Panel}>
      <div className={style.Bet_Display}>
        ${props.bet}
      </div>
      <BetPanel changeBet={props.changeBet} style={style} playDeal={playDeal} bet={props.bet} />
      {/* props.bet is passed to BetButtons to enable disabled attribute */}
      <button className={style.Play_Deal} onClick={playDeal}>
        {props.dealButton}
      </button>
    </section>
  );
}

export default ButtonPanel;