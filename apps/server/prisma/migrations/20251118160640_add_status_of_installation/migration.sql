/*
  Warnings:

  - Added the required column `status` to the `github_integration` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "STATUS" AS ENUM ('PENDING', 'ACTIVE');

-- AlterTable
ALTER TABLE "github_integration" ADD COLUMN     "installationCreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "status" "STATUS" NOT NULL;
