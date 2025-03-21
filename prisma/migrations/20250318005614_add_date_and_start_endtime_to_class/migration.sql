/*
  Warnings:

  - Added the required column `date` to the `classes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endTime` to the `classes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `classes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "classes" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "endTime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startTime" TIMESTAMP(3) NOT NULL;
