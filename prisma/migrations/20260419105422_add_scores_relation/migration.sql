/*
  Warnings:

  - You are about to drop the column `value` on the `AnswerOption` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "PersonalityScore" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "personality" TEXT NOT NULL,
    "points" INTEGER NOT NULL,
    "answerOptionId" INTEGER NOT NULL,
    CONSTRAINT "PersonalityScore_answerOptionId_fkey" FOREIGN KEY ("answerOptionId") REFERENCES "AnswerOption" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AnswerOption" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "questionId" INTEGER NOT NULL,
    CONSTRAINT "AnswerOption_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_AnswerOption" ("id", "questionId", "text") SELECT "id", "questionId", "text" FROM "AnswerOption";
DROP TABLE "AnswerOption";
ALTER TABLE "new_AnswerOption" RENAME TO "AnswerOption";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
