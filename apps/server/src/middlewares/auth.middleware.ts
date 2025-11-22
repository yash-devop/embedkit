import { auth } from "@/lib/better-auth/auth.js";
import { fromNodeHeaders } from "better-auth/node";
import { NextFunction, Request, Response } from "express";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("auth middleware is running");
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  });
  if (!session?.session || !session.user) {
    return res.status(401).json({
      data: "",
      error: "Unauthorized Access, Please login",
    });
  }
  req.session = session;
  next();
};
