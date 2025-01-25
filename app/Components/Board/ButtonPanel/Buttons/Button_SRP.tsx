import React from "react";

const Button_SRP: React.FC<Button> = ({
    id,
    disabled,
    onClick,
    text,
    className,
  }) => {
    return (
      <>
        <button
          id={id}
          disabled={disabled}
          onClick={onClick}
          className={className}
        >
          {text}
        </button>
      </>
    );
  };

export default Button_SRP;