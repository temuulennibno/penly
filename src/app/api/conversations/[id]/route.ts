import { NextRequest, NextResponse } from "next/server";
import { getConversation } from "penly/service/conversation-service";
import { getPathVariable } from "penly/utils/url";

export const GET = async (request: NextRequest) => {
  const _id = getPathVariable(request, "/api/conversations/");
  const result = await getConversation(_id);
  if (result === null) {
    return NextResponse.json({ message: "Not Found" }, { status: 404 });
  }
  return NextResponse.json(result);
};

// PATCH/PUT -> /api/conversations/12
export const PATCH = (request: NextRequest) => {};

// DELETE -> /api/conversations/12
export const DELETE = (request: NextRequest) => {};
