import { useQuery } from "@tanstack/react-query";
import { CACHE_KEYS } from "@repo/common/queryCacheKeys";
import { API_URLS } from "@repo/common/apiUrls";
import { IGetIntegrationServiceResponse } from "@repo/common/types";
import { apiClient } from "@/lib/axios/client.ts";
export const useGetIntegration = () => {
  return useQuery({
    queryKey: [CACHE_KEYS.GET_GITHUB_INTEGRATION],
    queryFn: async () => {
      const res = await apiClient.get<IGetIntegrationServiceResponse>(
        API_URLS.getIntegration
      );

      return res.data.data;
    },
  });
};
