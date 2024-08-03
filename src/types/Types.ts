import { ChangeEvent } from "react";
export interface InputProps {
  onchange: (e: ChangeEvent<HTMLInputElement>) => void;
  title: string;
  value: string;
  type: "text" | "number";
  name: string;
  required: boolean;
  requiredText: string;
}export type TChild = { children: React.ReactNode; };

