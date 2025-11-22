// Common for all

export interface ICreateGithubInstallation {
  data: {
    url: string;
    status: true;
  };
  error: any;
  message: string;
}
export interface IGetIntegrationServiceResponse {
  data: {
    id: string;
    installationId: string;
    status: string;
    userId: string;
    accountLogin: any;
    accountType: any;
    appSlug: any;
    createdAt: string;
    updatedAt: string;
  };
  error: any;
  message: string;
}
