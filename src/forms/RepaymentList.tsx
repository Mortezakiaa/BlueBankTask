"use client";

import SpinnerLoader from "@/components/SpinnerLoader";
import Table from "@/components/Table";
import useGetRepaymentList from "@/hooks/useGetRepaymentList";
import toast from "react-hot-toast";

export default function RepaymentList() {
  const { data, error, isLoading } = useGetRepaymentList();

  if (isLoading) return <SpinnerLoader />;
  if (error) return toast.error(error.message);
  return <Table data={data} />;
}
