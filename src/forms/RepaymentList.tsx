"use client";

import Table from "@/components/Table";
import useGetRepaymentList from "@/hooks/useGetRepaymentList";

export default function RepaymentList() {
  const { data, error, isLoading, isSuccess } = useGetRepaymentList();

  return <Table />;
}
