function BetButton(props: any) {

  function change(): void {
    props.changeBet();
  }

  return (
    <button className={props.className} onClick={change} id={props.id} disabled={props.disabled}>
      {props.sign}
    </button>
  );
}

export default BetButton;