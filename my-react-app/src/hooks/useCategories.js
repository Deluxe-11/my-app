import { useQuery } from "react-query";
import mainAPI from "@/config/network";

export default function useCategories() {
  return useQuery("categories", async () => {
    const response = await mainAPI.get("/api/backend/v1/categories");
    return response.data.data;
  });
}
