import { Router } from "express";
import { AuthController } from "./auth.controller.js";

export const AuthRouter = Router();

AuthRouter.post("/signin", AuthController.login);
