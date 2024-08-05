import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

export default function useGetRepaymentList() {
  const { data, isSuccess, isLoading, error } = useQuery({
    queryKey: ["repaymentList"],
    queryFn: async () => {
      try {
        const res = await axios.get("http://localhost:5000/data");
        return res.data;
      } catch (error) {
        if (error instanceof AxiosError)
          return { error: true, message: error.response?.data };
        return error;
      }
    },
    staleTime: 50000,
  });
  return { data, isSuccess, isLoading, error };
}
