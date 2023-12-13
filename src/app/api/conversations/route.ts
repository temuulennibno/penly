import { NextRequest, NextResponse } from "next/server";
import { createConversation, getAllConversations } from "penly/service/conversation-service";

// GET -> /api/conversations
export const GET = async (request: NextRequest) => {
  try {
    const result = await getAllConversations();
    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
  }
};

// POST -> /api/conversations
export const POST = async (request: NextRequest) => {
  const data = await request.json();
  const createdData = createConversation(data);
  return NextResponse.json(createdData);
};
