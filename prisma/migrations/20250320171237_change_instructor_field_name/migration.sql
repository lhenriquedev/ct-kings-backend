/*
  Warnings:

  - You are about to drop the column `instrutor_id` on the `classes` table. All the data in the column will be lost.
  - Added the required column `instructor_id` to the `classes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "classes" DROP CONSTRAINT "classes_instrutor_id_fkey";

-- AlterTable
ALTER TABLE "classes" DROP COLUMN "instrutor_id",
ADD COLUMN     "instructor_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "classes" ADD CONSTRAINT "classes_instructor_id_fkey" FOREIGN KEY ("instructor_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
