import axios from "axios";
import { nanoid } from "nanoid";
import { mongoApiRequest } from "penly/utils/mongoApiRequest";

// api-url https://ap-south-1.aws.data.mongodb-api.com/app/data-diolp/endpoint/data/v1
// api-key = YkPHUTHBmy5tIRvdnOsb4FruNu7I8MfKaOpIoRACElDIGW1HUarjnC1cDsCzXuiu

export const getAllConversations = async () => {
  const { response, error } = await mongoApiRequest("find", "conversations", {});
  if (error) {
    console.error(error);
    return [];
  }
  return response.documents;
};

export const getConversation = (_id: string) => {};

export const createConversation = (members: string[]) => {};
