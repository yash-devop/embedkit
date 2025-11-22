// src/types/express.d.ts
import "express";
import { type Session, User } from "better-auth";
declare global {
  namespace Express {
    interface Request {
      session: {
        session: Session;
        user: User;
      };
    }
  }
}
