"use client";

import Button from "@/components/Button";
import FormLayout from "@/components/FormLayout";
import Input from "@/components/Input";
import { useRouter } from "next/navigation";

export default function AddBankInfo() {
  const router = useRouter();

  const nextStep = () => {
    router.push("/addOtherDetails");
  };

  const prevStep = () => {
    router.back();
  };

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
      />
      <Input
        name="phoneNumber"
        required
        requiredText="شماره شبا الزامی میباشد"
        onchange={() => {}}
        title="شماره شبا"
        type="number"
        value=""
      />
      <Input
        name="phoneNumber"
        onchange={() => {}}
        title="میانگین ریالی موجودی سالیانه"
        type="number"
        value=""
      />
      <div className="flex items-center gap-4">
        <Button mode="default" onclick={nextStep} text="ثبت و مرحله بعد" />
        <Button mode="prev" onclick={prevStep} text="بازگشت" />
      </div>
    </FormLayout>
  );
}
