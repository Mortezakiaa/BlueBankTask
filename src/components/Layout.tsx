"use client";
import { Toaster } from "react-hot-toast";
import Header from "./Header";
import { TChild } from "@/types/Types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Layout({ children }: TChild) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="mx-8 mt-4">{children}</main>
      <Toaster />
    </QueryClientProvider>
  );
}
