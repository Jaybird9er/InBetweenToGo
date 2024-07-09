function Card(props: any) {

  let value = props.value;
  let symbol = props.symbol;
  let label = props.label;
  let color = props.color;

  return (
    <div className={props.className}>
      <span style={{ color: color }}>{label}</span>
      &nbsp;:&nbsp;
      <span style={{ color: color }}>{symbol}</span>
    </div>
  );
}

export default Card;