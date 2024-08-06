"use client";

import Button from "@/components/Button";
import FormLayout from "@/components/FormLayout";
import SpinnerLoader from "@/components/SpinnerLoader";
import useGetRepaymentList from "@/hooks/useGetRepaymentList";
import useNavigateSteps from "@/hooks/useNavigateSteps";
import { Details, TFacilities } from "@/types/Types";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function AddOtherDetails() {
  const { data, error, isLoading } = useGetRepaymentList();
  const { replaceStep } = useNavigateSteps();

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Details>();
  const loanType = watch("loanType");

  const sendData = (data: Details) => {
    console.log(data);
    toast.success("عملیات با موفقیت انجام شد");
    replaceStep("/repaymentList");
  };

  if (isLoading) return <SpinnerLoader />;
  if (error) return toast.error(error.message);
  
  return (
    <FormLayout onSubmit={handleSubmit(sendData)}>
      <Controller
        name="loanType"
        control={control}
        rules={{ required: "نوع وام باید انتخاب شود" }}
        render={({ field }) => (
          <div>
            <label
              htmlFor="loan"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              نوع وام
            </label>
            <select
              {...field}
              id="loan"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value=""></option>
              {data?.map((i: TFacilities) => (
                <option value={i.id}>{i.name}</option>
              ))}
            </select>
            {errors && (
              <span className="text-sm text-red-600">
                {errors.loanType?.message}
              </span>
            )}
          </div>
        )}
      />
      <Controller
        name="repaymentType"
        control={control}
        rules={{ required: "نوع باز پرداخت باید انتخاب شود" }}
        render={({ field }) => (
          <div>
            <label
              htmlFor="repayment"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              نوع بازپرداخت
            </label>
            <select
              {...field}
              id="repayment"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value=""></option>
              {data?.map((i: TFacilities) => {
                if (i.id === loanType) {
                  return i.repaymentType?.map((i) => (
                    <option value={i.value}>{i.name}</option>
                  ));
                }
              })}
            </select>
            {errors && (
              <span className="text-sm text-red-600">
                {errors.repaymentType?.message}
              </span>
            )}
          </div>
        )}
      />

      <div>
        <Button type="submit" mode="default" text="ثبت و تایید نهایی" />
      </div>
    </FormLayout>
  );
}
