import { ChatInput } from "penly/components/chat/ChatInput";
import { ChatList } from "penly/components/chat/ChatList";

export default function Home() {
  return (
    <div>
      <ChatList />
      <ChatInput />
    </div>
  );
}
