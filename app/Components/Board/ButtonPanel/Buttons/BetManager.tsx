import React from "react";
import Button_SRP from "./Button_SRP"
import { Cards } from "@/app/interface";

interface BetManagerProps {
    increaseBet: () => void;
    decreaseBet: () => void;
    handStage: number;
    min: number;
    max: number;
    hiLo: number;
    style: { [className: string]: string };
  }

  const BetManager: React.FC<BetManagerProps> = ({
    increaseBet,
    decreaseBet, 
    handStage, 
    min, 
    max,
    style, 
  } ) => {

    // after Play Button is hit, bet goes to $1 and (In/De)crease buttons are enabled, unless a shorthand is dealt
    let isDisabled = handStage !== 1 || min + 1 === max || min === max ? true : false;
  
    return (
      <div className={style.Bet_Panel}>
        <Button_SRP
          id={"IncreaseBet"}
          text={"+"}
          disabled={isDisabled}
          className={style.Increase_Bet}
          onClick={increaseBet}
        />
        <Button_SRP
          id={"DecreaseBet"}
          text={"-"}
          disabled={isDisabled}
          className={style.Decrease_Bet}
          onClick={decreaseBet}
        />
      </div>
    );
  };
  
  export default BetManager;
  