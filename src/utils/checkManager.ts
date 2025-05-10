import prismaFactory from "./prisma";

export async function isManagerOfEmployee(employeeId: string, managerId: string) {
  try {
    const prisma = prismaFactory.get();
    const empData = await prisma.employeeFieldData.findMany({
      where: {
        value: employeeId,
        field: {
          name: 'reportingManager',
        },
      },
      select: {
        userId: true,
      },
    });

    const managerIds = empData.map((emp) => emp.userId);

    return managerIds.includes(managerId);
  } catch (error) {
    console.error('Error checking if employee is managed by given manager:', error);
    throw new Error('Failed to check manager');
  }
}
