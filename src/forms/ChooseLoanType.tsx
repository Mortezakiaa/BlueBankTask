"use client";

import Button from "@/components/Button";
import useGetRepaymentList from "@/hooks/useGetRepaymentList";
import { TFacilities } from "@/types/Types";
import { useRouter } from "next/navigation";

export default function ChooseLoanType() {
  const { data, error, isLoading, isSuccess } = useGetRepaymentList();
  const router = useRouter();

  const nextStep = () => {
    router.push("/addPersonDetails");
  };

  return (
    <div>
      {data?.map((i: TFacilities) => (
        <div key={i.id}>{i.name}</div>
      ))}
      <Button mode="default" onclick={nextStep} text="مرحله بعد" />
    </div>
  );
}
