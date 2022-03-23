import { ReactNode } from "react";
import { Label, Input } from "./styled";

interface FormFieldProps {
  id?: string;
  children: ReactNode;
  value: string;
  type: string;
  name: string;
  onChange?: any;
}

export function FormField({id, children, value, type, name, onChange}: FormFieldProps) {
  return (
    <>
      <Label>
        {children}
      </Label>
      <Input id={id} type={type} name={name} value={value} onChange={onChange}>
      </Input>
    </>
  )
}