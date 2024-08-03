import { ChangeEvent } from "react";
export interface InputProps {
  onchange: (e: ChangeEvent<HTMLInputElement>) => void;
  title: string;
  value: string;
  type: "text" | "number";
  name: string;
  required?: boolean;
  requiredText?: string;
}
export type TChild = { children: React.ReactNode };

export type TRepaymentType = { name: string; value: number };
export interface TFacilities {
  id: string;
  createdDate: string;
  name: string;
  repaymentType: TRepaymentType[];
  amount: number;
  interestRate: number;
  penaltyRate: number;
}
