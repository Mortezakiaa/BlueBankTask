import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useGetRepaymentList() {
  const { data, isSuccess, isLoading, error } = useQuery({
    queryKey: ["lists"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/data");
      return res.data;
    },
  });
  return { data, isSuccess, isLoading, error };
}
