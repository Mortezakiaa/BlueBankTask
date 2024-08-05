"use client";

import Button from "@/components/Button";
import useGetRepaymentList from "@/hooks/useGetRepaymentList";
import useNavigateStpes from "@/hooks/useNavigateSteps";
import { TFacilities } from "@/types/Types";

export default function ChooseLoanType() {
  const { data, error, isLoading, isSuccess } = useGetRepaymentList();
  const { nextStep } = useNavigateStpes();

  return (
    <div>
      {data?.map((i: TFacilities) => (
        <div key={i.id}>{i.name}</div>
      ))}
      <Button
        type="button"
        mode="default"
        onclick={() => {
          nextStep("/addPersonDetails");
        }}
        text="مرحله بعد"
      />
    </div>
  );
}
