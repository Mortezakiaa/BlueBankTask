"use client";

import Button from "@/components/Button";
import FormLayout from "@/components/FormLayout";
import Input from "@/components/Input";
import useStepNavigate from "@/hooks/useStepNavigate";

export default function AddBankInfo() {
  const { nextStep, prevStep } = useStepNavigate();

  return (
    <FormLayout>
      <Input
        name="phoneNumber"
        required
        requiredText="شماره حساب الزامی میباشد"
        onchange={() => {}}
        title="شماره حساب"
        type="number"
        value=""
        error={false}
      />
      <Input
        name="phoneNumber"
        required
        requiredText="شماره شبا الزامی میباشد"
        onchange={() => {}}
        title="شماره شبا"
        type="number"
        value=""
        error={false}
      />
      <Input
        name="phoneNumber"
        onchange={() => {}}
        title="میانگین ریالی موجودی سالیانه"
        type="number"
        value=""
        error={false}
      />
      <div className="flex items-center gap-4">
        <Button
          mode="default"
          onclick={() => {
            nextStep("/addOtherDetails");
          }}
          text="ثبت و مرحله بعد"
        />
        <Button mode="prev" onclick={prevStep} text="بازگشت" />
      </div>
    </FormLayout>
  );
}
