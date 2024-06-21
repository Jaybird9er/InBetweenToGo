import { Cards } from "@/app/interface";

function Card(props: any) {
  const style: { [className: string]: string } = props.style;
  let deal = props.deal ? style.Card : style.Card_Back;

  let value = props.value;
  let symbol = props.symbol;
  let label = props.label;
  let color = props.color;

  return (
    <div className={deal}>
      <span style={{ color: color }}>{label}</span>
      &nbsp;:&nbsp;
      <span style={{ color: color }}>{symbol}</span>
    </div>
  );
}

export default Card;