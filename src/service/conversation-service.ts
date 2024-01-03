import { Conversation } from "@prisma/client";
import { SimpleResponse } from "penly/types/simple-response";
import { prisma } from "penly/utils/prisma";

export const getAllConversations = async (): Promise<SimpleResponse<Conversation[]>> => {
  try {
    const response = await prisma.conversation.findMany({
      include: {
        users: { include: { user: true } },
      },
    });
    return { response };
  } catch (error) {
    return { error };
  }
};

export const getConversationsByUserIds = async (userIds: string[]) => {
  try {
    const response = await prisma.conversation.findMany({
      where: {
        users: {
          some: { userId: { in: userIds } },
        },
      },
    });
    return { response };
  } catch (error) {
    return { error };
  }
};

export const getConversation = async (id: string) => {
  try {
    const response = await prisma.conversation.findUnique({ where: { id }, include: { users: { include: { user: true } } } });
    return { response };
  } catch (error) {
    return { error };
  }
};

export const createConversation = async (users: string[]): Promise<SimpleResponse<Conversation>> => {
  try {
    const response = await prisma.conversation.create({
      data: {
        users: {
          create: [
            {
              userId: users[0],
            },
            {
              userId: users[1],
            },
          ],
        },
      },
    });
    return { response };
  } catch (error) {
    return { error };
  }
};
