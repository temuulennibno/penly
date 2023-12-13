import { nanoid } from "nanoid";
import { Conversation } from "penly/types";
import { mongoApiRequest } from "penly/utils/mongoApiRequest";

export const getAllConversations = async (): Promise<Conversation[]> => {
  const { response, error } = await mongoApiRequest("find", "conversations", {});
  if (error) {
    console.error(error);
    return [];
  }
  return response.documents;
};

export const createConversation = async (members: string[]): Promise<Conversation | null> => {
  const newConversation = {
    _id: nanoid(),
    members,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  const { response, error } = await mongoApiRequest("insertOne", "conversations", {
    document: newConversation,
  });
  if (error) {
    console.error(error);
    return null;
  }
  return newConversation;
};

export const getConversation = async (_id: string): Promise<Conversation | null> => {
  const { response, error } = await mongoApiRequest("findOne", "conversations", { filter: { _id } });
  if (error) {
    console.error(error);
    return null;
  }
  return response;
};
