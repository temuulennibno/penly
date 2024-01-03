import { NextRequest, NextResponse } from "next/server";
import { getChatsByConversationById, sendChat } from "penly/service/chat-service";
import { getPathVariable } from "penly/utils/url";

export const GET = async (request: NextRequest) => {
  const conversationId = getPathVariable(request, "/api/chats/");
  const { response, error } = await getChatsByConversationById(conversationId);
  if (error) return NextResponse.json({ error }, { status: 500 });
  return NextResponse.json({ response });
};

export const POST = async (request: NextRequest) => {
  const conversationId = getPathVariable(request, "/api/chats/");
  const data = await request.json();
  const { senderId, content } = data;
  const { response, error } = await sendChat(conversationId, senderId, content);
  if (error) return NextResponse.json({ error }, { status: 500 });
  return NextResponse.json({ response });
};
