/*
  Warnings:

  - Added the required column `belt` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Belt" AS ENUM ('BRANCA', 'AZUL', 'ROXA', 'MARROM', 'PRETA');

-- AlterEnum
ALTER TYPE "role" ADD VALUE 'INSTRUCTOR';

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "belt" "Belt" NOT NULL;
