function BetButton(props: any) {
  
  function change(): void {
    props.changeBet();
  }

  return (
    <button className={props.className} onClick={change}>
      {props.sign}
    </button>
  );
}

export default BetButton;