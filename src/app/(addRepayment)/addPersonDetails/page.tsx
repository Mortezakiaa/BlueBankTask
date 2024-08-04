import AddPersonDetails from "@/forms/AddPersonDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "وارد کردن اطلاعات شخص",
  description: "add person details",
};

export default function page() {
  return <AddPersonDetails />;
}
