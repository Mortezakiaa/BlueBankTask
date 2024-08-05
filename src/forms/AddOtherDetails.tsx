"use client";

import FormLayout from "@/components/FormLayout";
import useGetRepaymentList from "@/hooks/useGetRepaymentList";
import { TFacilities, TRepaymentType } from "@/types/Types";
import { useState } from "react";
import { useForm } from "react-hook-form";

export interface TDetails {
  repaymentType: TRepaymentType;
}

export default function AddOtherDetails() {
  const { data, error, isLoading, isSuccess } = useGetRepaymentList();
  const [repayment, setRepayment] = useState<number>();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TDetails>();

  const submit = () => {};

  return (
    <FormLayout onSubmit={handleSubmit(submit)}>
      <div>
        <label
          htmlFor="repaymentType"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          نوع وام
        </label>
        <select
          value={repayment ?? 1}
          onChange={(e) => {
            setRepayment(+e.target.value);
          }}
          id="repaymentType"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {data?.map((i: TFacilities) => (
            <option value={i.id}>{i.name}</option>
          ))}
        </select>
      </div>
      {repayment && (
        <div>
          <label
            htmlFor="state"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            نوع بازپرداخت
          </label>
          <select
            value={1}
            id="state"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {data?.map((i: TFacilities) => {
              if (+i.id === repayment) {
                return i.repaymentType?.map((i) => (
                  <option value={i.value}>{i.name}</option>
                ));
              }
            })}
          </select>
        </div>
      )}
    </FormLayout>
  );
}
