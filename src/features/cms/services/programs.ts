import { prisma } from "@/src/lib/prisma";
import type { Program, ProgramSkill, ProgramCareer, ProgramFacility } from "@prisma/client";

export type ProgramWithRelations = Program & {
  skills: ProgramSkill[];
  careers: ProgramCareer[];
  facilities: ProgramFacility[];
};

export async function getPrograms() {
  return prisma.program.findMany({
    include: {
      skills: { orderBy: { order: "asc" } },
      careers: { orderBy: { order: "asc" } },
      facilities: { orderBy: { order: "asc" } },
    },
    orderBy: { order: "asc" },
  });
}

export async function getProgramById(id: string) {
  return prisma.program.findUnique({
    where: { id },
    include: {
      skills: { orderBy: { order: "asc" } },
      careers: { orderBy: { order: "asc" } },
      facilities: { orderBy: { order: "asc" } },
    },
  });
}

export interface CreateProgramInput {
  name: string;
  abbreviation: string;
  description: string;
  color: string;
  image?: string;
  order?: number;
  isActive?: boolean;
  skills?: string[];
  careers?: string[];
  facilities?: string[];
}

export async function createProgram(data: CreateProgramInput) {
  const { skills, careers, facilities, ...programData } = data;

  return prisma.program.create({
    data: {
      ...programData,
      skills: skills
        ? {
            create: skills.map((name, index) => ({ name, order: index })),
          }
        : undefined,
      careers: careers
        ? {
            create: careers.map((name, index) => ({ name, order: index })),
          }
        : undefined,
      facilities: facilities
        ? {
            create: facilities.map((name, index) => ({ name, order: index })),
          }
        : undefined,
    },
    include: {
      skills: true,
      careers: true,
      facilities: true,
    },
  });
}

export interface UpdateProgramInput {
  name?: string;
  abbreviation?: string;
  description?: string;
  color?: string;
  image?: string;
  order?: number;
  isActive?: boolean;
  skills?: string[];
  careers?: string[];
  facilities?: string[];
}

export async function updateProgram(id: string, data: UpdateProgramInput) {
  const { skills, careers, facilities, ...programData } = data;

  // Update program and relations in transaction
  return prisma.$transaction(async (tx) => {
    // Update main program data
    await tx.program.update({
      where: { id },
      data: programData,
    });

    // Update skills if provided
    if (skills !== undefined) {
      await tx.programSkill.deleteMany({ where: { programId: id } });
      if (skills.length > 0) {
        await tx.programSkill.createMany({
          data: skills.map((name, index) => ({
            programId: id,
            name,
            order: index,
          })),
        });
      }
    }

    // Update careers if provided
    if (careers !== undefined) {
      await tx.programCareer.deleteMany({ where: { programId: id } });
      if (careers.length > 0) {
        await tx.programCareer.createMany({
          data: careers.map((name, index) => ({
            programId: id,
            name,
            order: index,
          })),
        });
      }
    }

    // Update facilities if provided
    if (facilities !== undefined) {
      await tx.programFacility.deleteMany({ where: { programId: id } });
      if (facilities.length > 0) {
        await tx.programFacility.createMany({
          data: facilities.map((name, index) => ({
            programId: id,
            name,
            order: index,
          })),
        });
      }
    }

    // Return updated program with relations
    return tx.program.findUnique({
      where: { id },
      include: {
        skills: { orderBy: { order: "asc" } },
        careers: { orderBy: { order: "asc" } },
        facilities: { orderBy: { order: "asc" } },
      },
    });
  });
}

export async function deleteProgram(id: string) {
  return prisma.program.delete({ where: { id } });
}

export async function toggleProgramStatus(id: string, isActive: boolean) {
  return prisma.program.update({
    where: { id },
    data: { isActive },
  });
}
