export interface InputProps {
  type: "number" | "text";
  title: string;
  error: string;
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
export interface ButtonProps {
  text: string;
  type: "submit" | "button";
  onclick?: () => void;
  mode: "default" | "prev";
}
export interface TPersonDetails {
  firstName: string;
  lastName: string;
  meliCode: null | number;
  birthday: string;
  phoneNumber: null | number;
}
export interface TBankInfo {
  shomareHesab: number;
  shomareShaba: number;
  mianginRiali: number;
}
