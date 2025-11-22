/*
  Warnings:

  - You are about to drop the `GithubIntegration` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `GithubRepository` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "GithubIntegration" DROP CONSTRAINT "GithubIntegration_userId_fkey";

-- DropForeignKey
ALTER TABLE "GithubRepository" DROP CONSTRAINT "GithubRepository_integrationId_fkey";

-- DropTable
DROP TABLE "GithubIntegration";

-- DropTable
DROP TABLE "GithubRepository";

-- CreateTable
CREATE TABLE "github_integration" (
    "id" TEXT NOT NULL,
    "installationId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "accountLogin" TEXT,
    "accountType" TEXT,
    "appSlug" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "github_integration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "github_repository" (
    "id" TEXT NOT NULL,
    "integrationId" TEXT NOT NULL,
    "repoId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "private" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "github_repository_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "github_integration_installationId_key" ON "github_integration"("installationId");

-- CreateIndex
CREATE UNIQUE INDEX "github_repository_repoId_key" ON "github_repository"("repoId");

-- AddForeignKey
ALTER TABLE "github_integration" ADD CONSTRAINT "github_integration_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "github_repository" ADD CONSTRAINT "github_repository_integrationId_fkey" FOREIGN KEY ("integrationId") REFERENCES "github_integration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
