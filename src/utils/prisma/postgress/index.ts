import { PrismaClient } from "../../../generated/prisma";

// Initialize Prisma Client
const prisma = new PrismaClient();

const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log('PostgreSQL connected using Prisma!');
  } catch (error) {
    console.error('PostgreSQL connection error with Prisma:', error);
    process.exit(1); 
  }
};

// Optional: Disconnect when the application is shutting down
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

export { prisma, connectDB };
