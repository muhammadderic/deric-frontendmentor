import type { Comment } from "../types";
import ChatBox from "./ChatBox";

interface ChatsProps {
  data: Comment;
}

export default function Chats({ data }: ChatsProps) {
  return (
    <div>
      <ChatBox data={data} />
      {data.replies && data.replies.length > 0 && (
        <div className="ml-4 pl-4 border-l-3 border-[hsl(239,57%,85%)]">
          {data.replies.map(reply => (
            <ChatBox
              key={reply.id}
              data={reply}
            />
          ))}
        </div>
      )}
    </div>
  );
}