import { CorsOptions } from "cors";
import { FRONTEND_URL } from "@repo/common/config";

export const corsConfig: CorsOptions = {
  origin: FRONTEND_URL,
  credentials: true,
};
