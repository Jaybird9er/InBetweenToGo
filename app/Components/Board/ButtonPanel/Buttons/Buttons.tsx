import BetPanel from "./BetPanel";
import PlayDeal from "./PlayDeal";

function Buttons(props: any) {
    const style: { [className: string]: string } = props.style;
    
    return (
        <div className={style.Buttons}>
        <BetPanel changeBet={props.changeBet} style={style} />
        <PlayDeal />
        </div>
    );
}

export default Buttons;
  