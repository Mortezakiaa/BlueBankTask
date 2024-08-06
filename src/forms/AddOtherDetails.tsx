"use client";

import Button from "@/components/Button";
import FormLayout from "@/components/FormLayout";
import Select from "@/components/Select";
import SpinnerLoader from "@/components/SpinnerLoader";
import useGetRepaymentList from "@/hooks/useGetRepaymentList";
import useNavigateSteps from "@/hooks/useNavigateSteps";
import { Details, TFacilities } from "@/types/Types";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function AddOtherDetails() {
  const { data, isLoading } = useGetRepaymentList();
  const { replaceStep } = useNavigateSteps();

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Details>();
  const loanType = watch("loanType");

  const sendData = (data: Details) => {
    console.log(data);
    toast.success("عملیات با موفقیت انجام شد");
    replaceStep("/repaymentList");
  };

  if (isLoading) return <SpinnerLoader />;
  if (data?.error) return toast.error(data?.message);

  return (
    <FormLayout onSubmit={handleSubmit(sendData)}>
      <Controller
        name="loanType"
        control={control}
        rules={{ required: "نوع وام باید انتخاب شود" }}
        render={({ field }) => (
          <Select error={errors.loanType?.message} title="نوع وام" {...field}>
            {data?.map((i: TFacilities) => (
              <option value={i.id}>{i.name}</option>
            ))}
          </Select>
        )}
      />
      <Controller
        name="repaymentType"
        control={control}
        rules={{ required: "نوع باز پرداخت باید انتخاب شود" }}
        render={({ field }) => (
          <Select
            title="نوع بازپرداخت"
            error={errors.repaymentType?.message}
            {...field}
          >
            {data?.map((i: TFacilities) => {
              if (i.id === loanType) {
                return i.repaymentType?.map((i) => (
                  <option value={i.value}>{i.name}</option>
                ));
              }
            })}
          </Select>
        )}
      />

      <div>
        <Button type="submit" mode="default" text="ثبت و تایید نهایی" />
      </div>
    </FormLayout>
  );
}
