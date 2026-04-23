import { PrismaClient } from "../../../../generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import "dotenv/config";

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL!
});

const prisma = new PrismaClient({
  adapter
});

export async function GET() {
  const questions = await prisma.question.findMany({
    include: {
      options: {
        include: {
          scores: true
        }
      }
    }
  });

  return Response.json(questions);
}
