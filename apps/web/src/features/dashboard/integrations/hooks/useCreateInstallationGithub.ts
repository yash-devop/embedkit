import { apiClient } from "@/lib/axios/client.ts";
import { API_URLS } from "@repo/common/apiUrls";
import { useMutation } from "@tanstack/react-query";

export const useCreateInstallationGithub = () => {
  return useMutation({
    mutationFn: async (): Promise<{
      data: {
        url: string;
        status: true;
      };
    }> => {
      return apiClient.post(API_URLS.createGithubAppInstallation);
    },
  });
};
