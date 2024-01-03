import { User } from "@prisma/client";
import { Conversation } from "penly/types/conversation";

export const getConversationPartner = (conversation: Conversation, userId: string) => {
  const users: User[] = conversation.users.map((user) => user.user);
  return users.filter((user) => user.id !== userId)[0];
};
