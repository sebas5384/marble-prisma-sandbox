import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // await prisma.user.create({
  //   data: {
  //     name: 'Alice',
  //     email: 'alice@prisma.io',
  //     posts: {
  //       create: { title: 'Este es el titulo'}
  //     },
  //     profile: {
  //       create: { bio: 'I like turtles'}
  //     }
  //   }
  // })

  // await prisma.user.deleteMany()

  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true
    }
  });
  console.log(JSON.stringify(allUsers));
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });