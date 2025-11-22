/*
  Warnings:

  - Added the required column `status` to the `github_integration` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "github_integration" ADD COLUMN     "status" "STATUS" NOT NULL,
ALTER COLUMN "installationId" DROP NOT NULL;
