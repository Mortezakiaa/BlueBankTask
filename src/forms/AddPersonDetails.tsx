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

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TPersonDetails>();

  const submit = (data: TPersonDetails) => {
    console.log(data);
    nextStep("/addBankInfo");
  };

  return (
    <FormLayout onSubmit={handleSubmit(submit)}>
      <Controller
        name="firstName"
        rules={{ required: "نام الزامی میباشد" }}
        control={control}
        render={({ field }) => (
          <Input
            type="text"
            title="نام"
            {...field}
            error={errors.firstName?.message}
          />
        )}
      />
      <Controller
        name="lastName"
        rules={{ required: "نام خانوادگی الزامی میباشد" }}
        control={control}
        render={({ field }) => (
          <Input
            type="text"
            title="نام خانوادگی"
            {...field}
            error={errors.lastName?.message}
          />
        )}
      />
      <Controller
        name="meliCode"
        rules={{
          required: "کد ملی الزامی میباشد",
          validate: (value) => {
            return (
              [/^\d{10}$/].every((pattern) =>
                pattern.test(value!.toString())
              ) || "کد ملی صحیح نیست"
            );
          },
        }}
        control={control}
        render={({ field }) => (
          <Input
            type="number"
            title="کد ملی"
            {...field}
            error={errors.meliCode?.message}
          />
        )}
      />
      <Controller
        name="birthday"
        rules={{ required: "تاریخ تولد الزامی میباشد" }}
        control={control}
        render={({ field }) => (
          <Input
            type="text"
            title="تاریخ تولد"
            {...field}
            error={errors.birthday?.message}
          />
        )}
      />
      <Controller
        name="phoneNumber"
        rules={{
          required: "شماره تماس الزامی میباشد",
          validate: (value) => {
            return (
              [/^0\d{10}$/].every((pattern) =>
                pattern.test(value!.toString())
              ) || "شماره تماس صحیح نیست"
            );
          },
        }}
        control={control}
        render={({ field }) => (
          <Input
            type="number"
            title="شماره تماس"
            {...field}
            error={errors.phoneNumber?.message}
          />
        )}
      />
      <div className="flex items-center gap-4">
        <Button type="submit" mode="default" text="ثبت و مرحله بعد" />
        <Button type="button" mode="prev" onclick={prevStep} text="بازگشت" />
      </div>
    </FormLayout>
  );
}
