'use client'
import Input from "@/components/Input";

export default function page() {
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
    </>
  )
}
