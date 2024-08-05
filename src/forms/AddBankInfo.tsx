"use client";

import Button from "@/components/Button";
import FormLayout from "@/components/FormLayout";
import Input from "@/components/Input";
import useStepNavigate from "@/hooks/useStepNavigate";
import { TBankInfo } from "@/types/Types";
import { useForm, Controller } from "react-hook-form";

export default function AddBankInfo() {
  const { nextStep, prevStep } = useStepNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TBankInfo>();

  const submit = () => {
    nextStep("/addOtherDetails");
  };

  return (
    <FormLayout onSubmit={handleSubmit(submit)}>
      <Controller
        control={control}
        name="shomareHesab"
        rules={{
          required: "َشماره حساب الزامی میباشد",
          minLength: { value: 12, message: "حداقل باید 12 رقمی باشد" },
          maxLength: { value: 16, message: "حداکثر باید 16 رقمی باشد" },
        }}
        render={({ field }) => (
          <Input
            {...field}
            title="شماره حساب"
            type="number"
            error={errors.shomareHesab?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="shomareShaba"
        rules={{
          required: "شماره شبا الزامی میباشد",
          minLength: {
            value: 16,
            message: "حداقل باید 16 رقمی باشد",
          },
          maxLength: {
            value: 24,
            message: "حداکثر باید 24 رقمی باشد",
          },
        }}
        render={({ field }) => (
          <Input
            {...field}
            title="شماره شبا"
            type="number"
            error={errors.shomareShaba?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="mianginRiali"
        rules={{ required: "مبلغ ریالی الزامی میباشد" }}
        render={({ field }) => (
          <Input
            {...field}
            title="میانگین ریالی موجودی سالیانه"
            type="number"
            error={errors.mianginRiali?.message}
          />
        )}
      />
      <div className="flex items-center gap-4">
        <Button mode="default" type="submit" text="ثبت و مرحله بعد" />
        <Button mode="prev" type="button" onclick={prevStep} text="بازگشت" />
      </div>
    </FormLayout>
  );
}
