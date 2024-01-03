import { Conversation } from "@prisma/client";
import { nanoid } from "nanoid";
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
