"use client";

import Button from "@/components/Button";
import FormLayout from "@/components/FormLayout";
import Input from "@/components/Input";
import useGetRepaymentList from "@/hooks/useGetRepaymentList";
import useStepNavigate from "@/hooks/useStepNavigate";
import { TPersonDetails } from "@/types/Types";
import { useForm, Controller } from "react-hook-form";

export default function AddPersonDetails() {
  const { data, error, isLoading, isSuccess } = useGetRepaymentList();
  const { nextStep, prevStep } = useStepNavigate();

  const { handleSubmit, control } = useForm<TPersonDetails>();

  const submit = (data: TPersonDetails) => {
    console.log(data);
  };

  return (
    <FormLayout onSubmit={handleSubmit(submit)}>
      <Controller
        name="firstName"
        rules={{ required: "نام الزامی میباشد" }}
        control={control}
        render={({ field }) => <Input title="نام" {...field} />}
      />
      <Controller
        name="lastName"
        rules={{ required: "نام خانوادگی الزامی میباشد" }}
        control={control}
        render={({ field }) => <Input title="نام خانوادگی" {...field} />}
      />
      <Controller
        name="meliCode"
        rules={{ required: "کد ملی الزامی میباشد" }}
        control={control}
        render={({ field }) => <Input title="کد ملی" {...field} />}
      />
      <Controller
        name="birthday"
        rules={{ required: "تاریخ تولد الزامی میباشد" }}
        control={control}
        render={({ field }) => <Input title="تاریخ تولد" {...field} />}
      />
      <Controller
        name="phoneNumber"
        rules={{ required: "شماره تماس الزامی میباشد" }}
        control={control}
        render={({ field }) => <Input title="شماره تماس" {...field} />}
      />
      <div className="flex items-center gap-4">
        <Button type="submit" mode="default" text="ثبت و مرحله بعد" />
        <Button type="button" mode="prev" onclick={prevStep} text="بازگشت" />
      </div>
    </FormLayout>
  );
}
