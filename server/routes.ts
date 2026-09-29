import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { db } from "./db";
import { insertVisitorEmailSchema, visitorEmails } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)
  app.post("/api/visitor-emails", async (req, res, next) => {
    const parsed = insertVisitorEmailSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({ message: "Enter a valid email address." });
    }

    try {
      const [created] = await db
        .insert(visitorEmails)
        .values({ email: parsed.data.email.toLowerCase() })
        .onConflictDoNothing({ target: visitorEmails.email })
        .returning({ id: visitorEmails.id });

      return res.status(created ? 201 : 200).json({
        message: created
          ? "Thanks — your email has been saved."
          : "This email is already registered.",
      });
    } catch (error) {
      return next(error);
    }
  });

  return httpServer;
}
