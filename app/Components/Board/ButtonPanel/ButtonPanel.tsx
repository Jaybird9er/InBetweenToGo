import BetDisplay from "./BetDisplay";
import BetPanel from "./Buttons/BetPanel";
import PlayDeal from "./Buttons/PlayDeal";

function ButtonPanel( props: any ) {
  const style: { [className: string]: string } = props.style;

  return (
    <section className={style.Button_Panel}>
      <BetDisplay bet={props.bet} />
      <BetPanel changeBet={props.changeBet} style={style} />
      <PlayDeal />
    </section>
  );
}

export default ButtonPanel;