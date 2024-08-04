import AddBankInfo from "@/forms/AddBankInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "وارد کردن اطلاعات بانکی",
  description: "add person details",
};

export default function page() {
  return <AddBankInfo />;
}
