import AddOtherDetails from "@/forms/AddOtherDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "اطلاعات تکمیلی",
  description: "add person details",
};

export default function page() {
  return <AddOtherDetails />;
}
