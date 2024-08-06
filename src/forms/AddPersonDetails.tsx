"use client";

import Button from "@/components/Button";
import FormLayout from "@/components/FormLayout";
import Input from "@/components/Input";
import useNavigateSteps from "@/hooks/useNavigateSteps";
import { TPersonDetails } from "@/types/Types";
import { useForm, Controller } from "react-hook-form";
import {
  dateFormatValidate,
  meliCodeFormatValidate,
  phoneNumberFormatValidate,
} from "@/utils/FormatValidation";

export default function AddPersonDetails() {
  const { nextStep, prevStep } = useNavigateSteps();

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
            return meliCodeFormatValidate(value!.toString());
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
        rules={{
          required: "تاریخ تولد الزامی میباشد",
          validate: (value) => {
            return dateFormatValidate(value!.toString());
          },
        }}
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
            return phoneNumberFormatValidate(value!.toString());
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
