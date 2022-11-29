import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create user test
  const user = await prisma.user.create({
    data: {
      email: "oz@prisma.io",
      favs: [],
    },
  });
  // Update test
  const userUpdate = await prisma.user.update({
    where: {
      id: 1,
    },
    data: {
      favs: {
        push: "999",
      },
    },
  });
  // Get users test
  const users = await prisma.user.findMany();
  console.log(users);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
