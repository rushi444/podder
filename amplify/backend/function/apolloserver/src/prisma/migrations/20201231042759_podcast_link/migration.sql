/*
  Warnings:

  - Added the required column `podcastLink` to the `Podcast` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Podcast" ADD COLUMN     "podcastLink" TEXT NOT NULL,
ADD COLUMN     "imageUrl" TEXT;
