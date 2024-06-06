function BetButton(props: any) {
  
  function change() {
    props.changeBet();
  }

  return (
    <button className={props.className} onClick={change}>
      {props.sign}
    </button>
  );
}

export default BetButton;