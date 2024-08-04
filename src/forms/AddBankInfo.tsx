"use client";

import Button from "@/components/Button";
import FormLayout from "@/components/FormLayout";
import Input from "@/components/Input";
<<<<<<< HEAD
import useStepNavigate from "@/hooks/useStepNavigate";

export default function AddBankInfo() {
  const { nextStep, prevStep } = useStepNavigate();
=======
import { useRouter } from "next/navigation";

export default function AddBankInfo() {
  const router = useRouter();

  const nextStep = () => {
    router.push("/addOtherDetails");
  };

  const prevStep = () => {
    router.back();
  };
>>>>>>> 11a93e5f3603a4bb4647fee60ed1aaaec150dc6e

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
<<<<<<< HEAD
        error={false}
=======
>>>>>>> 11a93e5f3603a4bb4647fee60ed1aaaec150dc6e
      />
      <Input
        name="phoneNumber"
        required
        requiredText="شماره شبا الزامی میباشد"
        onchange={() => {}}
        title="شماره شبا"
        type="number"
        value=""
<<<<<<< HEAD
        error={false}
=======
>>>>>>> 11a93e5f3603a4bb4647fee60ed1aaaec150dc6e
      />
      <Input
        name="phoneNumber"
        onchange={() => {}}
        title="میانگین ریالی موجودی سالیانه"
        type="number"
        value=""
<<<<<<< HEAD
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
=======
      />
      <div className="flex items-center gap-4">
        <Button mode="default" onclick={nextStep} text="ثبت و مرحله بعد" />
>>>>>>> 11a93e5f3603a4bb4647fee60ed1aaaec150dc6e
        <Button mode="prev" onclick={prevStep} text="بازگشت" />
      </div>
    </FormLayout>
  );
}
