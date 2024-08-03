"use client";

import useGetRepaymentList from "@/hooks/useGetRepaymentList";

export default function RepaymentList() {
  const { data, error, isLoading, isSuccess } = useGetRepaymentList();
    console.log(data);
    
  return <div></div>;
}
