import { ReactNode } from "react";
import { Container } from "./styles";

interface ButtonTypes {
  type: string,
  onClick?: () => void;
  className?: string;
  id?: string;
  value?: string;
  children?: ReactNode;
  onSubmit?: any;
  disabled?: boolean;
}

export function Button({ type, onClick, className, id, value, children, onSubmit, disabled}: ButtonTypes) {
  return (
    <Container type={type} onClick={onClick} className={className} id={id} value={value} onSubmit={onSubmit} disabled={disabled}>
      {children}
    </Container>
  )
}