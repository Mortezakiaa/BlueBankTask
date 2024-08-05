import { TFacilities } from "@/types/Types";
import { sp } from "@/utils/seperateNumber";

export default function Table({ data }: { data: TFacilities[] }) {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-x-scroll border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-4 py-2 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    ردیف
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-2 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    نوع تسهیلات
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-2 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    نرخ بهره
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-2 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    نرخ جریمه
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-2 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    مقدار
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-2 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    نوع بازپرداخت
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data?.map((i: TFacilities) => (
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium text-gray-800 whitespace-nowrap">
                      {i.id}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-800 whitespace-nowrap">
                      {i.name}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-800 whitespace-nowrap">
                      {i.interestRate} درصد
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-800 whitespace-nowrap">
                      {i.penaltyRate} درصد
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-800 whitespace-nowrap">
                      {sp(i.amount)}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-800 whitespace-nowrap">
                      <div className="flex flex-col gap-1">
                        {i.repaymentType?.map((item) => (
                          <span>{item.name}</span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
