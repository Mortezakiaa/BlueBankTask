"use client";

import SpinnerLoader from "@/components/SpinnerLoader";
import RepaymentTable from "@/components/RepaymentTable";
import useGetRepaymentList from "@/hooks/useGetRepaymentList";
import toast from "react-hot-toast";

export default function RepaymentList() {
  const { data, isLoading } = useGetRepaymentList();

  if (isLoading) return <SpinnerLoader />;
  if (data?.error) return toast.error(data?.message);
  return <RepaymentTable data={data} />;
}
