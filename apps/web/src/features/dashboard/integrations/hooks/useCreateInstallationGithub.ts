import { apiClient } from "@/lib/axios/client.ts";
import { API_URLS } from "@repo/common/apiUrls";
import { ICreateGithubInstallation } from "@repo/common/types";
import { useMutation } from "@tanstack/react-query";

export const useCreateInstallationGithub = () => {
  return useMutation({
    mutationFn: async () => {
      const res = await apiClient.post<ICreateGithubInstallation>(
        API_URLS.createGithubAppInstallation
      );

      return res.data.data;
    },
  });
};
