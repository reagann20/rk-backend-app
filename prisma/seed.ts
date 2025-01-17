import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    await prisma.food.deleteMany({});

  await prisma.food.createMany({
    data: [
      { name: 'Nasi Briyani' },
      { name: 'Mee Goreng' },
      { name: 'Nasi Ayam' },
      { name: 'Clear all then show 4 items total' },
      // Add more items as needed
    ],
  });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
