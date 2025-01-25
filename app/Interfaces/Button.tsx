interface Button {
  id: string;
  text: string;
  disabled: boolean;
  className: string;
  onClick: () => void;
}