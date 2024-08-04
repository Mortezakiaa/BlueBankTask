"use client";

import Button from "@/components/Button";
import FormLayout from "@/components/FormLayout";
import Input from "@/components/Input";
import useGetRepaymentList from "@/hooks/useGetRepaymentList";
import { useRouter } from "next/navigation";

export default function AddPersonDetails() {
  const { data, error, isLoading, isSuccess } = useGetRepaymentList();
  const router = useRouter();

  const nextStep = () => {
    router.push("/addBankInfo");
  };
  const prevStep = () => {
    router.back();
  };

  return (
    <FormLayout>
      <Input
        name="firsName"
        onchange={() => {}}
        required
        requiredText="نام الزامی میباشد"
        title="نام"
        type="text"
        value=""
      />
      <Input
        name="lastName"
        onchange={() => {}}
        required
        requiredText="نام خانوادگی الزامی میباشد"
        title="نام خانوادگی"
        type="text"
        value=""
      />
      <Input
        name="meliCode"
        onchange={() => {}}
        required
        requiredText="کد ملی الزامی میباشد"
        title="کد ملی"
        type="number"
        value=""
      />
      <Input
        name="birthday"
        onchange={() => {}}
        required
        requiredText="کد ملی الزامی میباشد"
        title="تاریخ تولد"
        type="text"
        value=""
      />
      <Input
        name="phoneNumber"
        required
        requiredText="شماره تماس الزامی میباشد"
        onchange={() => {}}
        title="شماره تماس"
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
