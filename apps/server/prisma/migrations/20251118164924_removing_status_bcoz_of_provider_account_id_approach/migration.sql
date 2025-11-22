/*
  Warnings:

  - You are about to drop the column `installationCreatedAt` on the `github_integration` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `github_integration` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "github_integration" DROP COLUMN "installationCreatedAt",
DROP COLUMN "status";
