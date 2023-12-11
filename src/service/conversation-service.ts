import { nanoid } from "nanoid";

const conversations = [{ _id: nanoid(), members: [nanoid(), nanoid()] }];

export const getAllConversation = () => {
  return conversations;
};

export const getConversation = (_id: string) => {};

export const createConversation = (members: string[]) => {};
