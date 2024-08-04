"use client";

import Input from "@/components/Input";
import useGetRepaymentList from "@/hooks/useGetRepaymentList";

export default function AddPersonDetails() {
  const { data, error, isLoading, isSuccess } = useGetRepaymentList();

  return (
    <>
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
{/*       
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
      /> */}
    </>
  );
}
