-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "favs" INTEGER[],

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
