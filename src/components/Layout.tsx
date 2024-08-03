import { Toaster } from "react-hot-toast";
import Header from "./Header";
import { TChild } from "@/types/Types";

export default function Layout({ children }: TChild) {
  return (
    <>
      <Header />
      <main className="mx-8">{children}</main>
      <Toaster />
    </>
  );
}
